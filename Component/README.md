# Input for the directive:-
<custom-Heading animationeffect='' params="{
              'direction':'',
              'speed':'',
              'percentageOfArea':'',
              'backgroundColor':''
          }">specify the content to be in eleement</custom-Heading>



# Attributes of the  Directive :- 
animationeffect - slide the element or apply background <br/>
params <br/>

## animationeffect
```````
animationeffect : backgroundTransition | 
                  SlideLeftDown    | SlideLeftUp   |
                  SlideRightDown   | SlideRightUp  |
                  SlideBottomDown  | SlideBottomUp |
                  SlideUp          | SlideDown     

```````
backgroundTransition is related to the background animations.<br/>
The remaining are for sliding.<br/>
SlideUp,SlideDown are related to sliding the element from top.


## params:
speed - duration in which the animation to be completed <br/>
percentageOfArea - part of the area in th element to be covered in each iteration <br/>
direction - the direction in which the animation to be applied <br/>
backgroundColor - to set the backgroundcolor of the element <br/>



## direction

```
direction : topBottom | leftRight | rightLeft | bottomTop | 
            leftSlideDown   | leftSlideUp  | 
            RightSlideDown  | RightSlideUp | 
            BottomSlideDown | BottomSlideUp 
            
```

topBottom,leftRight,rightLeft,bottomTop are related to 'backgroundTransition'<br/>
leftSlideDown,leftSlideUp are related to slide the element from left<br/>
RightSlideDown,RightSlideUp are related to slide the element from right<br/>
BottomSlideDown, BottomSlideUp are related to the slide the element from bottom<br/>

Speed of Each Iteration : speed/percentageOfArea

The initial CSS properties are to be given through the controller in which the directive exists.

