exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("item")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("item").insert([
        {
          name: "AMD Ryzen™ 5 5600X",
          description:
            "AMD's fastest 6 core processor for mainstream desktop, \
        with 12 procesing threads Can deliver elite 100+ FPS performance in the world's most popular games \
        Bundled with the quiet, capable AMD Wraith Stealth cooler 4.6 GHz Max Boost, unlocked for overclocking, 35 MB of cache, \
        DDR-3200 support For the advanced Socket AM4 platform, can support PCIe 4.0 on X570 and B550 motherboards",
          price: 289.99,
          number_in_stock: 49,
          category_id: 1,
        },
        {
          name: "Intel Core i9-11900K",
          description:
            "Featuring Intel Turbo Boost Max Technology 3.0 and PCIe Gen 4.0 support, \
        unlocked 11th Gen Intel Core desktop processors are optimized for enthusiast gamers and \
        serious creators and help deliver high performance overclocking for an added boost. \
        Thermal solution NOT included in the box. \
        Compatible with 500 series & select 400 series chipset based motherboards.",
          price: 598.99,
          number_in_stock: 20,
          category_id: 1,
        },
        {
          name: "Asus ROG 90MB11K0-M0AAY0 Rampage VI Extreme Encore",
          description:
            "ASUS ROG Rampage VI Extreme Encore EATX motherboard delivers extreme, \
          dominating performance Power Solution Teamed Power Architecture Modern CPU architectures \
          up the ante for motherboard power design by transitioning from deep power saving modes to \
          full load almost instantaneously. Our latest VRM architecture rises to the challenge by \
          utilizing teamed power stages to rapidly swing current, while maintaining exemplary \
          thermal performance. A brief history We became the first manufacturer to implement phase \
          doublers when we shipped the A8N32-SLI Deluxe back in 2005. The board's VRM was lauded for \
          elegantly overcoming the power handling capabilities of components that were available at \
          the time and also reducing voltage ripple. Those benefits lead to phase doublers becoming \
          universally accepted in the industry, and they are still used for similar purposes today. \
          A shift in CPU demands However, the current crop of CPUs pack more cores than their predecessors, \
          and the latest instruction sets allow them to crunch computationally dense workloads at an \
          incredible pace. As an added bonus, they also consume less power at idle and can transition \
          between loads states much more quickly. These improvements necessitate a re-evaluation of \
          power design priorities because phase doublers add a propagation delay that hampers transient \
          response Bucking the trend Fortunately, the latest Integrated power components can handle \
          higher currents than the devices of yesteryear, making it possible to implement a simple \
          circuit topology that isn't hamstrung by the processing lag of phase doublers. That's why \
          our X299 motherboards utilize teamed power stages to deliver higher burst current per phase, \
          while maintaining the thermal performance of phase-doubled designs.",
          price: 780.73,
          number_in_stock: 14,
          category_id: 2,
        },
        {
          name: "MSI MPG X570 Gaming Pro Carbon WiFi",
          description:
            "MSI motherboards been designed with tons of smart features for convenient \
          setup and usage, such as pin-header keep out zone, friendly SATA & USB location and \
          multiple cooling solutions, so DIY users can pick and choose any gaming rig they want.",
          price: 259.99,
          number_in_stock: 55,
          category_id: 2,
        },
        {
          name: "XLR8 PNY 8GB XLR8 Gaming EPIC-X RGB™ DDR4 3200MHz",
          description:
            "Experience of benefits of a PC Memory Upgrade with the ability to \
          run more demanding applications simultaneously, and at faster speeds, for a better, \
          smoother, computing experience Extreme overclocked performance DDR4 Memory designed \
          for PC enthusiasts and gamers and supports Intel XMP 2.0 Support Customize you PC’s \
          color and lighting effects, without the need for additional cables or connectors \
          using the supported Asus Aura Sync®, Gigabyte RGB Fusion®, MSI Mystic Light Sync® \
          and ASRock Polychrome Sync® software Exceptional performance with a frequency speed \
          of 3200MHz (PC4-25600), and backwards compatible with: 3000MHz, 2933MHz, 2800MHz, \
          2666MHz, 2400MHz, 2133MHz CAS Latency of 16, 1.35 Volts.",
          price: 48.85,
          number_in_stock: 81,
          category_id: 3,
        },
        {
          name: "HP V6 Gaming Memory 16GB (2 x 8GB) Dual Channel Kit with Heatsinks DDR4 3200MHz",
          description:
            "HP V6 DDR4 memory module: Specially designed for high-performance memory enthusiasts, \
            gamers, and users looking for better system experience, as it can improve system \
            performance and speed response. DDR4 overclocking DRAM memory module: Overclocking \
            enhances gaming experience with immediate lag-free response. Top Quality DRAM IC sorting, \
            ensuring reliability and durability: With high-quality DRAM ICs carefully sorted, \
            it has passed the major motherboard brands compatibility test to ensure the stable \
            and long-term operation on different platforms. Efficient heat dissipation, enhancing \
            performance: The heatsink is made of top-grade aluminum, which allows better thermal \
            conductivity, keeps DRAM ICs cool by improving heat dissipation efficiency. Cool \
            appearance, tech-savvy's choice: V6 series comes in 3 different colors (Black, Blue, Red) \
            Uncompromised high performance: The new generation of DDR4 memory is available in \
            clock speeds ranging from 3000MHz through 3600MHz to meet and exceed expectations \
            from gamers and enthusiasts who want to reach the maximum potential of their PC system.",
          price: 94.99,
          number_in_stock: 35,
          category_id: 3,
        },
        {
          name: "Seagate FireCuda 120 SSD 500 GB",
          description:
            "Designed for speed and endurance, the highly-adaptable FireCuda 120 SSD is ready \
            for rigorous PC gaming. With 5600TB TBW durability and maxed out SATA III speed—this \
            SSD plugs in easily, roars to life, and lasts a lifetime. Whether you’re improving \
            your PC or giving your battlestation extra backup, FireCuda 120 SSD is ready to play.",
          price: 93.92,
          number_in_stock: 40,
          category_id: 4,
        },
        {
          name: "SAMSUNG 500GB 870 EVO",
          description:
            "The perfect choice for creators, IT professionals or everyday users, the latest \
            870 EVO has indisputable performance, reliability and compatibility \
            built upon Samsung's pioneering technology.",
          price: 94.99,
          number_in_stock: 72,
          category_id: 4,
        },
      ])
    })
}
