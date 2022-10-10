import { defineStore } from "pinia"

export const useTestStore = defineStore("TestStore", {
    state: () =>{
        stat: true
    },
    
    actions:  {
        change() {
            this.stat = !this.stat;
        }
    },
});