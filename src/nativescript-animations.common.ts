import { FlexboxLayout } from 'tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import {
  AnimationDefinition,
  Animation
} from 'tns-core-modules/ui/animation/animation';

export class Common {
  constructor() {}

  animateChildren(
    elementContainer: FlexboxLayout | StackLayout,
    animation: AnimationDefinition,
    delay: number,
    reverse?: boolean
  ): Promise<void> {
    // Get view animation definitions
    let animationDefs = this.createAnimations(
      elementContainer,
      animation,
      delay,
      reverse
    );

    // Create and play the animation set
    const animationSet = new Animation(animationDefs);
    return animationSet.play();
  }

  private createAnimations(
    elementContainer: FlexboxLayout | StackLayout,
    animation: AnimationDefinition,
    delay: number,
    reverse?: boolean
  ) {
    // Create empty list to store animation definitions
    let animationDefs = new Array<AnimationDefinition>();

    // Get the number of views to animate
    const childCount = elementContainer.getChildrenCount();

    for (let i = 0; i < childCount; i++) {
      // Get the animation view
      let animateView = elementContainer.getChildAt(i);

      // Make a copy of the supplied animation
      let animationCopy = Object.assign({}, animation);

      const childAnimateDelay = reverse ? childCount - i - 1 : i;
      // Create the animation delay
      const animationDelay = childAnimateDelay * delay;

      animationCopy['target'] = animateView;
      animationCopy['delay'] = animationDelay;

      // Push it to the animation list
      animationDefs.push(animationCopy);
    }

    return animationDefs;
  }
}
