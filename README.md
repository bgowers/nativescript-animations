# Nativescript Child Animations

A small nativescript plugin that makes it easier to animate multiple child elements.

## Installation

In your nativescript source directory, run:

```typescript
tns plugin add nativescript-child-animations
```

This should add the child animations package to your package.json within your project ready for use.

## Usage

This child animations package works by supplying a function with : a parent (container) view, an animation definition, a delay between animating each child view and optionally a 'reverse' boolean.

1. Import NativescriptChildAnimations module in the component that you'd like to use it in:

    ```typescript
    import { animateChildren } from 'nativescript-child-animations';
    ```

2. Call the `animateChildren()` function with params:
    ```typescript
    animateChildren(parentView, animationDef, 70);
    ```

### Example

example.component.html

```xml
<FlexBoxLayout flexDirection="column" id="parent">
  <Label style="transform: translate(0, -800)" text="I'm First!"></Label>
  <Label style="transform: translate(0, -800)" text="I'm Second!"></Label>
  <Label style="transform: translate(0, -800)" text="I'm Third!"></Label>
</FlexBoxLayout>
```

example.component.ts

```typescript
import { animateChildren } from 'nativescript-child-animations';
import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { FlexboxLayout } from 'tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { AnimationDefinition } from 'tns-core-modules/ui/animation/animation';
import { AnimationCurve } from 'tns-core-modules/ui/enums';

@Component({
    selector: 'Home',
    moduleId: module.id,
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    parentView: FlexboxLayout | StackLayout;
    animator = new NativescriptChildAnimations();
    animationDef: AnimationDefinition = {
        translate: { x: 0, y: 0 },
        duration: 1000,
        curve: AnimationCurve.easeOut
    }

    constructor(private page: Page) {}

    ngOnInit(): void {
        this.page.on('navigatedTo', () => {
            this.parentView = this.page.getViewById('parent');
            animateChildren(this.parentView, this.animationDef, 70, true);
        });
    }
}
```