import { ref } from "vue";
import { defineStore } from "pinia";

export const UseSubject = defineStore("Subject", () => {
  const subject = ref([
    {
        Code:"คพ313",
        Name:"Web Application Development",
        group:"1",
    },
    {
        Code:"คพ343",
        Name:"Object Oriented Analysisand Design",
        group:"1",
    },{
        Code:"คพ252",
        Name:"Mathematics for Computer Science",
        group:"1",
    },{
        Code:"ศท242",
        Name:"English for Science and Technology 2",
        group:"2",
    },{
        Code:"สต301",
        Name:"Principles of Statistics",
        group:"6",
    },{
        Code:"ศท013",
        Name:"Health for Life",
        group:"11",
    },
  ]);


  return { subject };
});