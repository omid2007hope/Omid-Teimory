function Home() {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row lg:flex-row justify-between items-center bg-blue-900 text-blue-50">
      <div className="h-1/2 w-full md:h-full lg:h-full md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center ">
        <div className="h-full w-full flex flex-row justify-start items-center">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.5Qp2V7WQayY9pl6ZcFq_ZgHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            className=" w-55 md:w-90 lg:w-120 z-100 mt-15 md:mt-0 lg:mt-0 ml-20 md:ml-15 lg:ml-30 rounded-2xl opacity-100 border border-blue-950"
          />
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.5Qp2V7WQayY9pl6ZcFq_ZgHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            className="w-55 md:w-90 lg:w-120 fixed top-22 md:top-95 lg:top-80 left-20 md:left-15 lg:left-30 z-75 opacity-75  rounded-2xl border border-blue-950 rotate-8"
          />
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.5Qp2V7WQayY9pl6ZcFq_ZgHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            className="w-55 md:w-90 lg:w-120 fixed top-22 md:top-95 lg:top-80 left-20 md:left-15 lg:left-30 z-50 opacity-50 rounded-2xl border border-blue-950 rotate-353"
          />
        </div>
      </div>
      <div className="h-1/2 w-full md:h-full lg:h-full md:w-1/2 lg:w-1/2 border"></div>
    </div>
  );
}

export default Home;
