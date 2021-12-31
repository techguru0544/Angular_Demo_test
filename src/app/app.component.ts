import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "DemoTest";
  constructor() {}
  customer_list = [
    {
      id: "1",
      name: "customer 1",
      email: "customer_1@yopmail.com",
      product: [
        {
          id: 2901,
          customer_id: "1",
          name: "CPU_1",
          price: 500,
        },
        {
          id: 8571,
          customer_id: "1",
          name: "Monitor_1",
          price: 100,
        },
        {
          id: 1211,
          customer_id: "1",
          name: "KeyBorad_1",
          price: 200,
        },
        {
          id: 2731,
          customer_id: "1",
          name: "RAM_1",
          price: 300,
        },
        {
          id: 4791,
          customer_id: "1",
          name: "MOuse_1",
          price: 520,
        },
      ],
    },
    {
      id: "2",
      name: "customer 2",
      email: "customer_2@yopmail.com",
      product: [
        {
          id: 2902,
          customer_id: "2",
          name: "CPU_2",
          price: 500,
        },
        {
          id: 8572,
          customer_id: "2",
          name: "Monitor_2",
          price: 100,
        },
        {
          id: 1212,
          customer_id: "2",
          name: "KeyBorad_2",
          price: 200,
        },
        {
          id: 2732,
          customer_id: "2",
          name: "RAM_2",
          price: 300,
        },
        {
          id: 4792,
          customer_id: "2",
          name: "MOuse_2",
          price: 520,
        },
      ],
    },
    {
      id: "3",
      name: "customer 3",
      email: "customer_3@yopmail.com",
      product: [
        {
          id: 2903,
          customer_id: "3",
          name: "CPU_3",
          price: 500,
        },
        {
          id: 8573,
          customer_id: "3",
          name: "Monitor_3",
          price: 100,
        },
        {
          id: 1213,
          customer_id: "3",
          name: "KeyBorad_3",
          price: 200,
        },
        {
          id: 2733,
          customer_id: "3",
          name: "RAM_3",
          price: 300,
        },
        {
          id: 4793,
          customer_id: "3",
          name: "MOuse_3",
          price: 520,
        },
      ],
    },
    {
      id: "4",
      name: "customer 4",
      email: "customer_4@yopmail.com",
      product: [
        {
          id: 2904,
          customer_id: "4",
          name: "CPU_4",
          price: 500,
        },
        {
          id: 8574,
          customer_id: "4",
          name: "Monitor_4",
          price: 100,
        },
        {
          id: 1214,
          customer_id: "4",
          name: "KeyBorad_4",
          price: 200,
        },
        {
          id: 2734,
          customer_id: "4",
          name: "RAM_4",
          price: 300,
        },
        {
          id: 4794,
          customer_id: "4",
          name: "MOuse_4",
          price: 520,
        },
      ],
    },
    {
      id: "5",
      name: "customer 5",
      email: "customer_5@yopmail.com",
      product: [
        {
          id: 2905,
          customer_id: "5",
          name: "CPU_5",
          price: 500,
        },
        {
          id: 8575,
          customer_id: "5",
          name: "Monitor_5",
          price: 100,
        },
        {
          id: 1215,
          customer_id: "5",
          name: "KeyBorad_5",
          price: 200,
        },
        {
          id: 2735,
          customer_id: "5",
          name: "RAM_5",
          price: 300,
        },
        {
          id: 4795,
          customer_id: "5",
          name: "MOuse_5",
          price: 520,
        },
      ],
    },
    {
      id: "6",
      name: "customer 6",
      email: "customer_6@yopmail.com",
      product: [
        {
          id: 2906,
          customer_id: "6",
          name: "CPU_6",
          price: 500,
        },
        {
          id: 8576,
          customer_id: "6",
          name: "Monitor_6",
          price: 100,
        },
        {
          id: 1216,
          customer_id: "6",
          name: "KeyBorad_6",
          price: 200,
        },
        {
          id: 2736,
          customer_id: "6",
          name: "RAM_6",
          price: 300,
        },
        {
          id: 4796,
          customer_id: "6",
          name: "MOuse_6",
          price: 520,
        },
      ],
    },
  ];
}

export interface product {
  id: Number;
  customer_id: Number;
  name: String;
  price: String;
}
