import { ref } from "vue";
import { defineStore } from "pinia";

export const UseAD = defineStore("AD", () => {
  const AD = ref([]);
  const add = (cd,nm,gp) => {
    const sbj ={
        code:cd,
        name:nm,
        group:gp,
    };
    AD.value.push(sbj);
  };
  const dele = (n) => {
    AD.value.splice(n,1);
  };
  return { AD,add,dele};
});
