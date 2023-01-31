import Image from "next/image";
const AboutUs = () => {
    return (<div className="w-full flex items-center justify-center h-[80%]">
        <div className="w-[50%] h-[80%] flex items-center justify-center ">
           <Image src="/images/good-removebg-preview (3).png" alt="" width={1000} height={300}  className="border  bg-white rounded-full
           "/>
        </div>
        <div className="w-[50%] h-[80%] flex items-center justify-center">
          <div className="w-[100%] h-[100%] ">
            <div className="w-[100%] h-[50%] ">
                <div className="w-[100%] flex items-center justify-center h-[50%]">
                    <p className="text-[50px] flex justify-center text-white w-[80%] leading-[60px] font-semibold  h-[100%] ">We Are More Than Multiple Services</p>
                </div>
                <div className="w-[100%] flex justify-center  h-[50%] ">
                  <p className="w-[80%] h-[100%] text-zinc-400"> This is a type pf resturant which typically serves food and drinks,
                    in addition to light refreshments such as baked goods or snacks.
                     The term comes from the rench word meaning food</p>
                </div>
            </div>
            <div className="w-[100%] h-[50%] flex justify-center">
                <div className="w-[40%] flex h-[100%]">
                  <div className="w-[25%] flex text-zinc-400 flex-col justify-around h-[80%]">
       
                  <Image src="/Images/order.png" alt="CHEF" width={30} height={30} className="w-8 h-8" />
                  <Image src="/Images/customer-service.png"  width={30} height={30}  alt="CHEF" className="w-8 h-8" />
                  <Image src="/Images/kitchen.png" alt="CHEF"  width={30} height={30}  className="w-8 h-8" />
                  </div>
                  <div className="w-[75%] h-[80%] ">
                  <ul className="w-full h-full flex text-zinc-400 flex-col justify-around">
                    <li>Online Order</li>
                    <li>24/7 Service</li>
                    <li>Clean Kitchen</li>
                  </ul>
                  </div>
                </div>
                <div className="w-[40%]  h-[100%] flex">
                <div className="w-[25%]  flex text-zinc-400 flex-col justify-around  h-[80%]">
                
                <Image src="/Images/booking.png" alt="CHEF"  width={30} height={30}  className="w-8 h-8" />
                <Image src="/Images/planning.png" alt="CHEF"  width={30} height={30}  className="w-8 h-8" />
                <Image src="/Images/chef.png" alt="CHEF"  width={30} height={30}  className="w-8 h-8" />
                </div>
                  <div className="w-[75%] h-[80%] ">
                  <ul className="w-full h-full flex text-zinc-400 flex-col justify-around" >
                    <li>Pre-Reservation</li>
                    <li>Organized Foodie Place</li>
                    <li>Super chef</li>
                  </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>);
}

export default AboutUs;