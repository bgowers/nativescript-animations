import { FlexboxLayout } from 'tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { AnimationDefinition } from 'tns-core-modules/ui/animation/animation';
export declare class Common {
    constructor();
}
export declare function animateChildren(elementContainer: FlexboxLayout | StackLayout, animation: AnimationDefinition, delay: number, reverse?: boolean): Promise<void>;
