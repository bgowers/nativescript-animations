import { AnimationDefinition } from 'tns-core-modules/ui/animation/animation';
import { FlexboxLayout } from 'tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { Common } from './nativescript-animations.common';

export declare function animateChildren(
  elementContainer: FlexboxLayout | StackLayout,
  animation: AnimationDefinition,
  delay: number,
  reverse?: boolean
): Promise<void>;
