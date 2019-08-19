import { NativescriptChildAnimations } from 'nativescript-child-animations';
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
            this.animator.animateChildren(this.parentView, this.animationDef, 70, true);
        });
    }
}
