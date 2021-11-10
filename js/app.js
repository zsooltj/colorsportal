var app = new Vue({
  el: "#app",
  data: {
    selectedColor: { id: null },
    bg: "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    message: "Hello Vue!",
    colors: [
      {
        id: 1,
        name: "red",
        bg: "https://images.unsplash.com/photo-1482872376051-5ce74ebf0908?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1550&q=80",
      },
      {
        id: 2,
        name: "green",
        bg: "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: 3,
        name: "blue",
        bg: "https://images.unsplash.com/photo-1581299327801-faeb40ea459e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1310&q=80",
      },
    ],
  },
  computed: {
    selectedColorName() {
      if (this.selectedColor !== null) {
        return this.colors[this.selectedColor.id - 1].name;
      } else {
        return "#3a6df0";
      }
    },
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
      this.changeColor(color.bg);
    },
    changeColor: function (bg) {
      document.getElementsByTagName("body")[0].classList.add("black");
      setTimeout(() => {
        document.getElementsByTagName("body")[0].style.backgroundImage =
          "url(" + bg + ")";
        document.getElementsByTagName("body")[0].classList.remove("black");
      }, 300);
    },
    changeDarkmode() {
      document.body.classList.toggle("light-mode");
    },
  },
  mounted() {
    this.changeColor(
      "https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    );
    // fetch();
  },
});

// $(function () {
//     $(".menu-link").click(function () {
//      $(".menu-link").removeClass("is-active");
//      $(this).addClass("is-active");
//     });
//    });

//    $(function () {
//     $(".main-header-link").click(function () {
//      $(".main-header-link").removeClass("is-active");
//      $(this).addClass("is-active");
//     });
//    });

//    const dropdowns = document.querySelectorAll(".dropdown");
//    dropdowns.forEach((dropdown) => {
//     dropdown.addEventListener("click", (e) => {
//      e.stopPropagation();
//      dropdowns.forEach((c) => c.classList.remove("is-active"));
//      dropdown.classList.add("is-active");
//     });
//    });

//    $(".search-bar input")
//     .focus(function () {
//      $(".header").addClass("wide");
//     })
//     .blur(function () {
//      $(".header").removeClass("wide");
//     });

//    $(document).click(function (e) {
//     var container = $(".status-button");
//     var dd = $(".dropdown");
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//      dd.removeClass("is-active");
//     }
//    });

//    $(function () {
//     $(".dropdown").on("click", function (e) {
//      $(".content-wrapper").addClass("overlay");
//      e.stopPropagation();
//     });
//     $(document).on("click", function (e) {
//      if ($(e.target).is(".dropdown") === false) {
//       $(".content-wrapper").removeClass("overlay");
//      }
//     });
//    });

//    $(function () {
//     $(".status-button:not(.open)").on("click", function (e) {
//      $(".overlay-app").addClass("is-active");
//     });
//     $(".pop-up .close").click(function () {
//      $(".overlay-app").removeClass("is-active");
//     });
//    });

//    $(".status-button:not(.open)").click(function () {
//     $(".pop-up").addClass("visible");
//    });

//    $(".pop-up .close").click(function () {
//     $(".pop-up").removeClass("visible");
//    });

//    const toggleButton = document.querySelector('.dark-light');

//    toggleButton.addEventListener('click', () => {
//      document.body.classList.toggle('light-mode');
//    });
