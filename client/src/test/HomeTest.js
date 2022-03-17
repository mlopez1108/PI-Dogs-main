import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import { postDog } from "../redux/actions/index.js";
import { Form } from "./components/CreatePage/form/Form.jsx";

configure({ adapter: new Adapter() });

describe("<Form />", () => {
  describe("Estructura", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Form />);
    });
    it("Renderiza un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Nombre:"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(0).text()).toEqual("Nombre:");
    });

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Altura (cm):"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(1).text()).toEqual("Altura (cm):");
    });

    it('Renderiza un input con la propiedad "name" igual a "height"', () => {
      expect(wrapper.find('input[name="height"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Peso (kg):"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(2).text()).toEqual("Peso (kg):");
    });

    it('Renderiza un input con la propiedad "name" igual a "weight"', () => {
      expect(wrapper.find('input[name="weight"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Años de vida:"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Años de vida:");
    });

    it('Renderiza un input con la propiedad "name" igual a "life_span"', () => {
      expect(wrapper.find('input[name="life_span"]')).toHaveLength(1);
    });

    it('Renderiza un boton con el "type" "submit"', () => {
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });
  });
});
