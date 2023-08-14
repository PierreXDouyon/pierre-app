import { shallowMount } from "@vue/test-utils";
import scrollToTop from "@/components/ScrollToTop.vue";
describe("ScrollToTop.vue", () => {
  it("scrolls to top when button is clicked", async () => {
    const wrapper = shallowMount(scrollToTop);

    // Mock the scrollToTop method
    const scrollToTopMock = jest.fn();
    wrapper.vm.scrollToTop = scrollToTopMock;

    // Find the button and trigger a click event
    const button = wrapper.find("#scrollToTop");
    await button.trigger("click");

    // Check if scrollToTop method was called
    expect(scrollToTopMock).toHaveBeenCalled();
  });
});
