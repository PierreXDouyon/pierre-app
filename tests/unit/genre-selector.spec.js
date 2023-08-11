import { shallowMount } from "@vue/test-utils";
import GenreSelector from "@/components/GenreSelector.vue";

describe("GenreSelector.vue", () => {
  it("displays genres", () => {
    const genres = ["Action", "Romance", "Comedy", "Drama"];
    const selectedGenre = "Action";
    const selectGenre = jest.fn();

    const wrapper = shallowMount(GenreSelector, {
      props: {
        genres,
        selectedGenre,
        selectGenre,
      },
    });

    // Check if genres are displayed
    const genreItems = wrapper.findAll("li");
    expect(genreItems.length).toBe(genres.length);

    // Verify the displayed genre texts
    genreItems.forEach((genreItem, index) => {
      expect(genreItem.text()).toBe(genres[index]);
    });
  });

  it("triggers selectGenre on click", async () => {
    const genres = ["Action", "Romance", "Comedy", "Drama"];
    const selectedGenre = "Action";
    const selectGenre = jest.fn();

    const wrapper = shallowMount(GenreSelector, {
      props: {
        genres,
        selectedGenre,
        selectGenre,
      },
    });

    // Simulate clicking on each genre
    const genreItems = wrapper.findAll("li");
    for (let index = 0; index < genres.length; index++) {
      await genreItems.at(index).trigger("click");
      expect(selectGenre).toHaveBeenCalledWith(genres[index]);
    }
  });
});

// import { mount } from "@vue/test-utils";
// import GenreSelector from "@/components/GenreSelector.vue";

// describe("GenreSelector Component", () => {
//   it("displays 'Select a Genre' text and genre options", () => {
//     const genres = ["Action", "Romance", "Comedy", "Drama"];

//     const wrapper = mount(GenreSelector, {
//       propsData: { genres },
//     });

//     const selectGenreText = wrapper.find("p").text();
//     expect(selectGenreText).toBe("Select a Genre:");

//     const genreOptions = wrapper.findAll("li");
//     // Assuming there are four genres in the genres array
//     expect(genreOptions).toHaveLength(genres.length);
//   });

//   it("emits 'select-genre' event when a genre option is clicked", async () => {
//     const genres = ["Action", "Romance", "Comedy", "Drama"];
//     const wrapper = mount(GenreSelector, {
//       propsData: { genres },
//     });

//     await wrapper.find("li").trigger("click");
//     expect(wrapper.emitted()["select-genre"]).toBeTruthy();
//   });
// });
// import { mount } from "@vue/test-utils";
// import GenreSelector from "@/components/GenreSelector.vue";

// describe("GenreSelector Component", () => {
//   it("displays 'Select a Genre' text and genre options", () => {
//     // Given
//     const genres = ["action", "romance", "comedy", "drama"];

//     // When
//     const wrapper = mount(GenreSelector, {
//       propsData: { genres },
//     });

//     // Then
//     // Check if the 'Select a Genre' text is displayed correctly
//     const selectGenreText = wrapper.find("p").text();
//     expect(selectGenreText).toBe("Select a Genre:");

//     // Check if each genre option is displayed correctly
//     const genreOptions = wrapper.findAll("li");
//     genreOptions.forEach((option, index) => {
//       const expectedGenre = genres[index];
//       const actualGenre = option.text();
//       expect(actualGenre).toBe(expectedGenre);
//     });
//   });
// });

// // GenreSelector Component
// describe("GenreSelector Component", () => {
//   it("displays 'Pick a Genre' text and menu of genres (Genres = action, romance, comedy, drama)", () => {
//     // Test if the component displays the "Pick a Genre" text and a dropdown menu.
//     // Vue.js Code: Use <p> and <select> tags to create the text and dropdown elements.
//     // Interaction: User sees the "Pick a Genre" text and can select a genre from the dropdown.
//   });
//   //
//   //
//   //

//   it("should access the movie details array from app.vue and apply Math.random to generate a random movie suggestion after a genre has been clicked", async () => {
//     // Test if the component accesses the movie details array from app.vue based on the selected genre.
//     // Vue.js Code: Use the selected genre to filter the movie details array from app.vue.
//     // Interaction: User selects a genre, component generates a random movie suggestion.
//   });
// });
