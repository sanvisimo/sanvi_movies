import React, { Component } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

export default class SliderGlide extends Component {
  state = { id: null };

  componentDidMount = () => {
    // Generated random id
    this.setState(
      { id: `glide-${Math.ceil(Math.random() * 100)}` },
      this.initializeGlider
    );
  };

  initializeGlider = () => {
    const a = document.querySelector(`#${this.state.id}`);
    this.slider = new Glide(a, this.props.options);
    this.slider.mount();
  };

  render = () => (
    // controls
    <div id={this.state.id} className="slider glide">
      <div className="two-controls-btns" data-glide-el="controls">
        <button className="arrow-left" data-glide-dir="<" title="start">
          <span className="hidden">Start</span>
        </button>
        <button className="arrow-right" data-glide-dir=">" title="end">
          <span className="hidden">End</span>
        </button>
      </div>
      {/* track  */}
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides" style={{ display: "flex" }}>
          {this.props.children.map((slide, index) => {
            return React.cloneElement(slide, {
              key: index,
              className: `${slide.props.className} glide__slide`,
            });
          })}
        </div>
      </div>
      {/* arrows */}
      {this.props.arrows ? (
        <div data-glide-el="controls">
          <button
            className="absolute left-0 rounded-full p-2 bg-teal-500 transition-opacity duration-150 ease-in delay-300 -translate-y-1/2 cursor-pointer z-10"
            style={{ top: "50%" }}
            data-glide-dir="<"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-white"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
            </svg>
          </button>

          <button
            className="absolute right-0 rounded-full p-2 bg-teal-500 transition-opacity duration-150 ease-in delay-300 -translate-y-1/2 cursor-pointer z-10"
            style={{ top: "50%" }}
            data-glide-dir=">"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-white"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}
      {/* bottom bullets */}
      {this.props.bullets ? (
        <div className="glide__bullets -mb-16" data-glide-el="controls[nav]">
          {this.props.children.map((slide, index) => {
            return (
              <button
                key={index}
                className="glide__bullet"
                data-glide-dir={"=" + index}
                title=".g"
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

SliderGlide.defaultProps = {
  options: {},
};
