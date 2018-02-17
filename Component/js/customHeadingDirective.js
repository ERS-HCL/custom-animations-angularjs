/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.directive('customHeading',function(customBackground,$timeout,reusableComponent,slideAnimation){
   return{
        restrict:'E',
        templateUrl:function(ele,attr){
            console.log('setting Template');
            var tempUrl = './templates/HeadingTemplate.html';
            return tempUrl;
        },
        
        transclude:true,
        link:function($scope,ele,attr){
            console.log('custom directive');
            var temp = angular.element(ele).children();
            var targetDiv = angular.element(ele).children().children();
           

            targetDiv.css($scope.stylesForHeading);
            targetDiv.css({
                'position':'relative'                
            });           

            var dataContainer = angular.element($('.dataContainer'));
            dataContainer.css({
                'position':'absolute',                
                'z-index':'5',
                'height':'0'
            });            
            
            var backgroundDiv;
            var bgColor = 'pink';
            if(attr.params.color){
                bgColor = aattr.params.color;
            }
            var btn = angular.element($('<input type="button"/>'));
            temp.append(btn);
            btn.attr('value',"Animate");
            console.log(attr.params);
            console.log(attr.animationeffect);  
            
            var resetbtn = angular.element($('<input type="button"/>'));
            temp.append(resetbtn);
            resetbtn.attr('value',"Reset");
            
            resetbtn.click(function(){
                btn.attr('disabled',false);
                targetDiv.css($scope.stylesForHeading);
                reusableComponent.setVisibility(targetDiv,'visible');
                targetDiv.css({
                    top:0,
                    left:0
                   
                });
                if(attr.animationeffect == 'backgroundTransition' && backgroundDiv){
                    backgroundDiv.css({
                        'background-color':'pink',
                        'height':0,
                        'width':0
                    });                    
                }
                else if(attr.animationeffect == 'SlideUp'){
                    targetDiv.css({
                        'display':'block'
                        
                    });
                }
            });
            
            
            var dimensionsOftargetDiv = reusableComponent.dimensionsWithContent(targetDiv);
            var outerDimensionsOftargetDiv = reusableComponent.dimensionsWithPaddingAndBorder(targetDiv);
            temp.css({
                'height':outerDimensionsOftargetDiv.height+'px',
                'position':'relative'
            });
            
            
            var params = JSON.parse(attr.params);
            angular.element(btn).on('click',function(){
                btn.attr('disabled',true);
               // alert('gf');
                if(attr.animationeffect == 'backgroundTransition'){
                    backgroundDiv = angular.element('<div></div>');
                    backgroundDiv.css({
                        'position':'absolute',
                        'z-index':'3',
                        'background-color':bgColor
                    }); 
                
                targetDiv.append(backgroundDiv);
                var desiredBackgroundHeight = dimensionsOftargetDiv.height;
                var desiredBackgroundWidth = dimensionsOftargetDiv.width;
                console.log(desiredBackgroundHeight + ' '+ desiredBackgroundWidth); 
                var backgroundPadding =  reusableComponent.extractPaddingPropertyFromElement(targetDiv);
                var backgroundProperties = {};
               
               var paddingProperties = backgroundPadding;
                
                $timeout(function(){
                    customBackground.setBackground(backgroundDiv,params,desiredBackgroundHeight,desiredBackgroundWidth,paddingProperties);
                   
                },1000);                
            }         
            else if(attr.animationeffect == 'SlideDown'){
                var paddingProperties = reusableComponent.extractPaddingPropertyFromElement(targetDiv);
                //reusableFunctions.setOverflowProperty(targetDiv,'hidden');
                targetDiv.css({
                    'display':'none'                    
                });
              /*  $timeout(function(){
                    targetDiv.css({                        
                        'visibility':'visible'
                    });                   
                    customizedBackgroundEffect.setBackground(targetDiv,params,targetDivHeight,targetDivWidth);
                    $timeout(function(){
                        reusableFunctions.setOverflowProperty(targetDiv,'visible');
                    },params.speed);
                },3000);*/
                
                    targetDiv.slideDown(params.speed);
               
            }
            else if(attr.animationeffect == 'SlideUp'){              
                targetDiv.slideUp(params.speed);             
            }
            else if(attr.animationeffect == "SlideLeftDown"){              
                slideAnimation.setLeftSlideDown(targetDiv,params);
               
            }
            else if(attr.animationeffect == 'SlideLeftUp'){              
                slideAnimation.setLeftSlideUp(targetDiv,params);                           
            }
            
            else if(attr.animationeffect == 'SlideRightDown'){               
                slideAnimation.setRightSlideDown(targetDiv,params);                             
            }
            
            else if(attr.animationeffect == 'SlideRightUp'){               
                slideAnimation.setRightSlideUp(targetDiv,params);                
            }
            
            else if(attr.animationeffect == 'SlideBottomDown'){               
                slideAnimation.setBottomSlideDown(targetDiv,params);               
            }
            
            else if(attr.animationeffect == 'SlideBottomUp'){              
                slideAnimation.setBottomSlideUp(targetDiv,params);               
            }            
            
           });
            
        }  
        
   }    
});




