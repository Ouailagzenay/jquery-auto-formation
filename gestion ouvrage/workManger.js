class WorkManager {
    #workList = [];
    #counter = 0;

    get workList(){
        return this.#workList;
    }

    addWork(work) {
        this.#counter += 1
        work.id = this.#counter
        this.#workList.push(work)
    }
    getItem(id) {
        for (var i = 0; i < this.#workList.length; i++) {
            if (id == this.#workList[i].id) {
                return this.#workList[i]
            }
        }
      }

    modiferOuvrage(work) {
        
        for (var i = 0; i < this.#workList.length; i++) {
            if (work.id == this.#workList[i].id) {
                this.#workList[i] = work
            }
        }
      }
   
}