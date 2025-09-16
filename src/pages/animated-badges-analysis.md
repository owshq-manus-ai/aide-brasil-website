# Animated Badges Analysis

This document analyzes the animated badges in `HomePage.jsx` and their performance impact.

## Badges Identified

1.  **`✦ APRESENTANDO ✦`**: This badge is a `<span>` element with a `text-shadow` and is surrounded by two `motion.div` elements that create an animated line on each side. The animation is a simple width change. This is not a major performance issue, but it can be simplified.

2.  **`⚡ MOMENTO DE OPORTUNIDADE ⚡`**: This is a `<span>` element with a static style. The animation is in the surrounding `motion.div` elements, similar to the "APRESENTANDO" badge.

3.  **`✨ JORNADA PERSONALIZADA ✨`**: This is a `motion.div` with a `backgroundPosition` animation. This is one of the main culprits for the performance issues.

4.  **`🚀 TRANSFORMAÇÃO COMPLETA 🚀`**: This is another `motion.div` with a `backgroundPosition` animation, which is also a performance bottleneck.

## Performance Impact

The `backgroundPosition` animations on the "JORNADA PERSONALIZADA" and "TRANSFORMAÇÃO COMPLETA" badges are the primary cause of performance issues. These animations are expensive to render and cause significant repaint and layout shifts, especially on mobile devices.

## Proposed Solution

To improve performance, we will convert the animated badges to static elements while preserving their visual appeal. This will involve the following steps:

1.  Remove the `motion.div` wrappers and `backgroundPosition` animations from the "JORNADA PERSONALIZADA" and "TRANSFORMAÇÃO COMPLETA" badges.
2.  Replace the animated badges with static `div` elements with the same styles.
3.  Simplify the animations for the "APRESENTANDO" and "MOMENTO DE OPORTUNIDADE" badges to reduce their performance impact.

