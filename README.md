# slidingandbackgroundanimations
created custom directive that can :-
a) slide down or up, the element in all 4 directions(top,bottom,left,right)
b) achieving transition in background application from all 4 directions(top,bottom,left,right)

Parameters taken by Directive :-
animationeffect - slide the element or apply background
speed - duration in which the animation to be completed
percentageOfArea - part of the area in th element to be covered in each iteration
direction - the direction in which the animation to be applied
backgroundColor - to set the backgroundcolor of the element


In the component values to be applied to the parameters:
animationeffect : backgroundTransition | SlideDown | SlideUp | SlideLeftDown | SlideLeftUp | SlideRightDown | SlideRightUp              |SlideBottomDown | SlideBottomUp

direction : topBottom | leftRight | rightLeft | bottomTop | leftSlideDown | leftSlideUp | RightSlideDown | RightSlideUp | BottomSlideDown | BottomSlideUp

The direction for the top slide down,top slide up not to be mentioned as these are the default animations are already implemented in jquery.

'params' = { direction,speed,percentageOfArea,backgroundColor} to be given to the directive



Speed of Each Iteration id determined by:
  speed/percentageOfArea
  
Template:
  <containerDiv>
    <targetDiv>
      <dataContainer>
      </dataContainer>
    </targetDiv>
    <button>
    </button>
  <containerDiv>    

    
The animations effect the <targetDiv>.The <containerDiv> is used to append the button to see the effect on <targetDiv>.
<containerDiv> can be removed and the component can be reused.
  
<backgroundDiv> is another element that is added to the template for achieving transition on background application.While applying the background to the <targetDiv>, the data in the element will be  retained  by varying the z-index between the <dataContainer> and <backgroundDiv> and maintaining the height of the <dataContainer> to be zero.  
 
 if(animationName for Slide):
   // properties are applied to the <targetDiv>
 else if(animationName for background):
    // properties are applied to the <bacgroundDiv>
  
The css properties of the <targetDiv> are to be given from the controller under which the custom directive is present.
 
 The component is working with the css properties:-
 position,padding,height,width
 
 The componnent would work fine with the css properties height,width,padding varying.

Technologies used :- AngularJs,Jquery
