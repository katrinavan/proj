import React from 'react';

const About = () => {
  return (<div>
    <div className="flex flex-wrap justify-items-center bg-gray-200 m-100">
        <div className="w-1/2 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member1" src='./src/img/member1.jpg' onClick={()=>
              document.getElementById("membersModal1").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Xingyan Zhong</p>
          </div>
        </div>
        <div className="w-1/2 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member2" src='./src/img/member2.jpg' onClick={()=>
              document.getElementById("membersModal2").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Katrina Van</p>
          </div>
        </div>
        <div className="w-full"></div>
        <div className="w-1/2 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member3" src='./src/img/member3.jpg' onClick={()=>
              document.getElementById("membersModal3").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Kambiz Reza</p>
          </div>
        </div>
        <div className="w-1/2 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member4" src='./src/img/member4.jpg' onClick={()=>
              document.getElementById("membersModal4").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Jooyeon Kim</p>
          </div>
        </div>
    </div>
    <div className="h-100">
      <p><br/><br/></p>
    </div>
  </div>);
};

export default About;