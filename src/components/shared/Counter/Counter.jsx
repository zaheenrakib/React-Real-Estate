import React from 'react';
import CountUp from "react-countup"

const Counter = () => {
    return (
        <div>
            <section className='bg-[#b2c7c9]'>

                <div className='flex justify-between  p-12'>
                    <div><CountUp className='text-5xl font-extrabold font-[1200px]'
                        start={8500}
                        end={1000}
                        duration={3} /> <span className='text-5xl'>K+</span>
                        <h1>ELEGANT APARTMENTS</h1>
                    </div>
                    <div><CountUp className='text-5xl font-[1200px]'
                        start={800}
                        end={35000}
                        duration={4} /> <span className='text-5xl'>K+</span>
                        <h1>LUXURY HOUSES</h1>
                    </div>
                    <div><CountUp className='text-5xl  font-[1200px]'
                        start={80}
                        end={5000}
                        duration={3} /> <span className='text-5xl'>K+</span>
                        <h1>SATISFIED GUESTS</h1>
                    </div>
                    <div><CountUp className='text-5xl  font-[1200px]'
                        start={800}
                        end={90000}
                        duration={4} /> <span className='text-5xl'>K+</span>
                        <h1>HAPPY OWNERS</h1>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Counter;