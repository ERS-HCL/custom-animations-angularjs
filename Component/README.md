# Attributes of the  Directive :- 
animationeffect - slide the element or apply background <br/>
params <br/>

## params include:
speed - duration in which the animation to be completed <br/>
percentageOfArea - part of the area in th element to be covered in each iteration <br/>
direction - the direction in which the animation to be applied <br/>
backgroundColor - to set the backgroundcolor of the element <br/>


```````
animationeffect : backgroundTransition |
                  SlideDown       | SlideUp      | 
                  SlideLeftDown   | SlideLeftUp  |
                  SlideRightDown  | SlideRightUp |
                  SlideBottomDown | SlideBottomUp

```````


## direction

```
direction : topBottom | leftRight | rightLeft | bottomTop | 
            leftSlideDown   | leftSlideUp  | 
            RightSlideDown  | RightSlideUp | 
            BottomSlideDown | BottomSlideUp
```


topBottom,leftRight,rightLeft,bottomTop are related to backgroundTransition


Speed of Each Iteration : speed/percentageOfArea

