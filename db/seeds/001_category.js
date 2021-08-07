exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("category")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("category").insert([
        {
          name: "CPU",
          description:
            'The CPU (Central Processing Unit) is the part of a computer system \
            that is commonly referred to as the "brains" of a computer. \
            The CPU is also known as the processor or microprocessor. \
            The CPU is responsible for executing a sequence of stored instructions called a program ',
        },
        {
          name: "Motherboard",
          description:
            "A motherboard is the main printed circuit board (PCB) in a computer. \
            The motherboard is a computer's central communications backbone connectivity point, \
            through which all components and external peripherals connect. ... \
            Additional components can be added to a motherboard through its expansion slots.",
        },
        {
          name: "RAM",
          description:
            'RAM is short for "random access memory" and while it might sound mysterious, \
            RAM is one of the most fundamental elements of computing. \
            RAM is the super-fast and temporary data storage space that a computer \
            needs to access right now or in the next few moments.',
        },
        {
          name: "SSD",
          description:
            "A solid-state drive (SSD) is a new generation of storage device used in computers. \
          SSDs use flash-based memory, which is much faster than a traditional mechanical hard disk. \
          Upgrading to an SSD is one of the best ways to speed up your computer.",
        },
      ])
    })
}
