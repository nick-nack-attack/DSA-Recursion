// this is a class. The underscore means it's a private class. It's only supposed to be accessed by the linked list.
class _Node {
    // set a constructor with the value and pointing to the next node. it accepts the variable VALUE which will hold the data.
    constructor(value, next) {
      //set the value to itself. 
      this.value = value
      // then set next to itself
      this.next = next
    }
  
  }
  
  // setting the first item would refer to the head.
  class LinkedList {
  
    constructor() {
      // set the head to null to start.
      this.head = null;
    }
  
    // this is a function to insert an item at the head. it takes in the item as an argument.
    insertFirst(item) {
      // set the head to a new Node with the item as the input and at the head.
      this.head = new _Node(item, this.head)
    }
  
    // this is to insert an item at the end of the linked list.
    insertLast(item) {
      // if the head is null, then the list is empty, and set it as the first item.
      if (this.head === null) {
        this.insertFirst(item);
      }
      // or else set a temporary head and while each item in the list is not null, go to the next.
      else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
          // once you get to the node that .next = null, you're at the end, and set
          // the temp node to a new Node with the item and pointing to null, which means it is the end.
          tempNote.next = new _Node(item, null);
        }
      }
    }
  
    find(item) {
      // start at the head. set a variable that is the head.
      let currNode = this.head;
      // if the list is empty, return null. if the head is false, that means the list is empty.ee
      if (!this.head) {
        return null
      }
      // check for the item. while the current node is not the item ...
      while (currNode.value !== item) {
        // if it gets to the end of the list without finding the item then return null
          if (currNode.next === null) {
            return null;
          }
          // else keep looking for the item.
          else {
            currNode = currNode.next;
          }
      }
      // if it's found, then return it.
      return currNode;e
    }
  
    remove(item) {
      // if the list is empty, given that head is null, then return null.
      if (!this.head) {
        return null;
      }
      // if the head is the value of the item, meaning its the first item, make the next node the head.
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
      // start at the head by setting the currNode to the head.
      let currNode = this.head;
      // keep track of the previous node.
      let prevNode = this.head;
      // while the currNode is not null (i.e. the end) and the current node value is not the item, keep moving through the list and update the current and previous node.
      while ((currNode !== null) && (currNode.value !== item)) {
        // the current node is set to the previous one.
        prevNode = currNode;
        // the current one is the next one.
        currNode = currNode.next;
      }
      // if the currNode is null, then you're at the end of the list, and the item isn't in the list.
      if (currNode === null) {
        // say that it's over
        console.log('Item not found');
        // then just return to exit out i think
        return;
      }
      // otherwise if the item is found then the previous node's next is the current node's next, meaning the current one will be skipped.
      prevNode.next = currNode.next;
      
    }
  
  }