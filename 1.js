const testimonials = [
    {
      name: "Kalpana Chawla",
      image: "1.png",
      testimonial:
        "Kalpana Chawla was an Indian-born American astronaut and mechanical engineer who was the first woman of Indian origin to go to space. She first flew on Space Shuttle Columbia in 1997 as a mission specialist and primary robotic arm operator",
    },
    {
      name: "Mary Kom",
      image: "2.jpg",
      testimonial:
        "Mary Kom Mangte Chungneijang Mary Kom, also known as Mary Kom is the only woman boxer who has won a medal in each of the six World Championships.",
    },
    {
      name: " Saina Nehwal",
      image: "3.jpg",
      testimonial:
        "Saina Nehwal became the first Indian women to win a medal in Badminton at 2012 Olympic Games. Later in 2015, she became the first Indian woman to secure no.",
    },
  ];
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  function plus() {
    i = (j + i + 1) % j;
    displayTestimonial();
  }
    function my(){
    i = (j + i - 1) % j;
    displayTestimonial();
  };
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };
  window.onload = displayTestimonial;