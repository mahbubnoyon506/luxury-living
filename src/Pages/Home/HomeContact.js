import React from 'react';

const HomeContact = () => {
    return (
        <div className='py-20' >
            <p className='text-primary text-center'>Service</p>
            <h2 className='text-center text-4xl font-bold text-primary leading-snug'>Let us handle your <br /> project, professionally.</h2>
            <div class=" p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto my-10">
                    <form>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-slate-100 
        
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="First name" />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
         
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                                    aria-describedby="emailHelp124" placeholder="Last name" />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-slate-100 
        
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="First name" />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
         
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                                    aria-describedby="emailHelp124" placeholder="Last name" />
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class="mb-3 xl:w-96">
                                <textarea
                                    class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                        </div>


                        <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-primary
      text-base-100
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-primary active:shadow-lg
      transition
      duration-150
      ease-in-out">Sign up</button>
                    </form>

            </div>
        </div>
    );
};

export default HomeContact;