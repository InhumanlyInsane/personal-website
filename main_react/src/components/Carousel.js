import { Carousel, Typography } from "@material-tailwind/react";
 
export function CarouselDefault() {

  return (

    <Carousel
      className="rounded-xl h-[500px] w-[900px] mb-20"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >

      <div className="relative flex items-center justify-end h-full w-full bg-white">
        <img
          src={process.env.PUBLIC_URL + 'gedung-fasilkom-ui-2.jpg'}
          alt="1"
          className="h-[500px] w-[400px] object-cover"
        />
        <div className="absolute inset-0 grid h-full w-[500px] place-items-center bg-gradient-to-br from-green-400 to-blue-500">
          <div className="w-80">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-center font-fancy"
            >
              Educational Journey
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="opacity-80 text-justify font-primary"
            >
              It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-[500px] w-[900px] bg-white flex items-center justify-between">
        <img
          src={process.env.PUBLIC_URL + 'gedung-fasilkom-ui-2.jpg'}
          alt="1"
          className="h-[500px] w-[400px] object-cover"
        />
        <div className="w-[500px] h-full bg-gray-900 bg-opacity-75 flex items-center justify-center bg-gradient-to-bl from-green-400 to-blue-500">
          <div className="w-80">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-center font-fancy"
            >
              Technophile
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="opacity-80 text-justify font-primary"
            >
              It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-end h-full w-full bg-white">
        <img
          src={process.env.PUBLIC_URL + 'gedung-fasilkom-ui-2.jpg'}
          alt="1"
          className="h-[500px] w-[400px] object-cover"
        />
        <div className="absolute inset-0 grid h-full w-[500px] place-items-center bg-gray-900 bg-opacity-75 bg-gradient-to-br from-green-400 to-blue-500">
          <div className="w-80">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-center font-fancy"
            >
              Leading & Empowering
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="opacity-80 text-justify font-primary"
            >
              It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.
            </Typography>
          </div>
        </div>
      </div>


      {/* <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="2"
          className="h-200 w-200 object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="3"
          className="h-200 w-200 object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div> */}

    </Carousel>
  );
}