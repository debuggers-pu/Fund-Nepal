import React from 'react'
import image1 from '../uploads/sandesh.png'
import image2 from '../uploads/sandesh1.png'
import image3 from '../uploads/Saurav.jpg'
import image4 from '../uploads/sushil.png'


const Ourteam = () => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      
      <div class="mb-10 md:mb-16">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Meet our Team</h2>
  
      </div>
     
  
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
        
        <div class="flex flex-col items-center">
          <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
            <img src={image1}  alt="sandesh" class="w-full h-full object-cover object-center" />
          </div>
  
          <div>
            <div class="text-indigo-500 md:text-lg font-bold text-center">Sandesh Poudel</div>
      
  
           
            
            
          </div>
        </div>
        
  
      
        <div class="flex flex-col items-center">
          <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
            <img src={image2} loading="lazy" alt="Photo by christian ferrer" class="w-full h-full object-cover object-center" />
          </div>
  
          <div>
            <div class="text-indigo-500 md:text-lg font-bold text-center">Sandesh Thapa</div>
  
            
            
           
          </div>
        </div>
        
  
  
        <div class="flex flex-col items-center">
          <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
            <img src={image3} loading="lazy" alt="Photo by Ayo Ogunseinde" class="w-full h-full object-cover object-center" />
          </div>
  
          <div>
            <div class="text-indigo-500 md:text-lg font-bold text-center">Saurav Bhujel</div>
            
  
            
            
            
          </div>
        </div>
        
  
        
        <div class="flex flex-col items-center">
          <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
            <img src={image4} loading="lazy" alt="Shusil" class="w-full h-full object-cover object-center" />
          </div>
  
          <div>
            <div class="text-indigo-500 md:text-lg font-bold text-center">Sushil Banstola</div>
  
            
           
          </div>
        </div>
        
  
        
      </div>
    </div>
  </div>
  )
}

export default Ourteam