import { Directive, ElementRef, Input, NgZone } from '@angular/core';

@Directive({
  selector: '[noDataText]',
  standalone: true,
})
export class NoDataTextDirective {
  @Input() public noDataText: string = '';
  @Input() public noDataOpacity: string = '1';

  private _observer?: MutationObserver;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  private setOpacity(opacity?: string): void {
    this.ngZone.run(() => {
      const elementRefStyle: CSSStyleDeclaration =
        this.elementRef.nativeElement.style;

      elementRefStyle.opacity = opacity ?? this.noDataOpacity;
    });
  }

  private setTargetText(target: Node): void {
    this.ngZone.run(() => {
      target.textContent = this.noDataText ? this.noDataText : '-';
    });
  }

  private handleCharacterDataMutation(mutation: MutationRecord): void {
    const target: Node = mutation.target;
    const isEmpty: boolean =
      !target.textContent || target.textContent.trim() === '';

    if (isEmpty) {
      this.setOpacity();
      this.setTargetText(target);

      return;
    }

    if (target.textContent !== this.noDataText) {
      this.setOpacity('1');
    }
  }

  private handleElementMutations(mutations: MutationRecord[]): void {
    mutations.forEach((mutation) => {
      if (mutation.type === 'characterData') {
        this.handleCharacterDataMutation(mutation);
      }
    });
  }

  private initMutationObserver(): void {
    this._observer = new MutationObserver(
      this.handleElementMutations.bind(this)
    );

    this._observer.observe(this.elementRef.nativeElement, {
      characterData: true,
      subtree: true,
    });
  }

  public ngOnInit(): void {
    this.initMutationObserver();
  }

  public ngOnDestroy(): void {
    if (this._observer) {
      this._observer.disconnect();
    }
  }
}
