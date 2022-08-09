




                                   //    Dark Mode Script 
 

document.getElementById('day-d').addEventListener('click', (event) => {
  let element_night_div = document.getElementById('night-div');
  element_night_div.style.backgroundColor = '#ffffff';
  element_night_div.style.color = '#000000';

});

document.getElementById('night').addEventListener('click', (event) => {
  let element_night_div2 = document.getElementById('night-div');
  element_night_div2.style.backgroundColor = '#000000';
  element_night_div2.style.color = '#ffffff';

});



                                   //   end  Dark Mode Script 






                                   //   head carosol Script 


                                   var collection;


                                   collection = ['https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=1000', 'https://images.pexels.com/photos/1184000/pexels-photo-1184000.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=1000', 'https://images.pexels.com/photos/290098/pexels-photo-290098.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=1000', 'https://images.pexels.com/photos/762064/pexels-photo-762064.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=1000', 'https://images.pexels.com/photos/705405/pexels-photo-705405.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=1000', 'https://images.pexels.com/photos/848748/pexels-photo-848748.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=1000'];
                                            
                                   
                                              let element_img = document.getElementById('img');
                                            element_img.setAttribute("src", collection[0]);
                                            
                                            
                                            document.getElementById('SLIDE').addEventListener('click', (event) => {
                                              collection.push(collection.shift());
                                              let element_img2 = document.getElementById('img');
                                              element_img2.setAttribute("src", collection[0]);
                                            
                                            });

                                   //   end  head carosol Script 



                                   //     Dark Mode Script 



                                   //   end  Dark Mode Script 



                                   //     Dark Mode Script 



                                   //   end  Dark Mode Script 



                                   //     comments Script 


                                   var comments, item;
        
                                   function getNumberOrString(value) {
                                     // Convert a string value to a number if possible
                                     let number_value = Number(value);
                                     if (Number.isNaN(number_value)) {
                                       return value
                                     } else {
                                       return number_value
                                     }
                                   }
                                   
                                   
                                   comments = ['very great website. John', 'love the simple layout. Alex', 'I would like to hire you. David'];
                                   let element_list = document.getElementById('list');
                                   comments.forEach((item) => {
                                     let new_li = document.createElement('li');
                                     new_li.innerText = comments.shift();
                                   
                                     element_list.appendChild(new_li);
                                   });
                                   
                                   
                                   document.getElementById('button').addEventListener('click', (event) => {
                                     comments.unshift(getNumberOrString(document.getElementById('name-text').value));
                                     let element_list2 = document.getElementById('list');
                                     let new_li2 = document.createElement('li');
                                     new_li2.innerText = comments[0];
                                   
                                     element_list2.appendChild(new_li2);
                                   
                                   });
                           
                           

                                   //   end  comments Script 




