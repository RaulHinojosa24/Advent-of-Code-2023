// --- Day 5: If You Give A Seed A Fertilizer ---
// You take the boat and find the gardener right where you were told he would be: managing a giant "garden" that looks more to you like a farm.

// "A water source? Island Island is the water source!" You point out that Snow Island isn't receiving any water.

// "Oh, we had to stop the water because we ran out of sand to filter it with! Can't make snow with dirty water. Don't worry, I'm sure we'll get more sand soon; we only turned off the water a few days... weeks... oh no." His face sinks into a look of horrified realization.

// "I've been so busy making sure everyone here has food that I completely forgot to check why we stopped getting more sand! There's a ferry leaving soon that is headed over in that direction - it's much faster than your boat. Could you please go check it out?"

// You barely have time to agree to this request when he brings up another. "While you wait for the ferry, maybe you can help us with our food production problem. The latest Island Island Almanac just arrived and we're having trouble making sense of it."

// The almanac (your puzzle input) lists all of the seeds that need to be planted. It also lists what type of soil to use with each kind of seed, what type of fertilizer to use with each kind of soil, what type of water to use with each kind of fertilizer, and so on. Every type of seed, soil, fertilizer and so on is identified with a number, but numbers are reused by each category - that is, soil 123 and fertilizer 123 aren't necessarily related to each other.

// For example:

// seeds: 79 14 55 13

// seed-to-soil map:
// 50 98 2
// 52 50 48

// soil-to-fertilizer map:
// 0 15 37
// 37 52 2
// 39 0 15

// fertilizer-to-water map:
// 49 53 8
// 0 11 42
// 42 0 7
// 57 7 4

// water-to-light map:
// 88 18 7
// 18 25 70

// light-to-temperature map:
// 45 77 23
// 81 45 19
// 68 64 13

// temperature-to-humidity map:
// 0 69 1
// 1 0 69

// humidity-to-location map:
// 60 56 37
// 56 93 4
// The almanac starts by listing which seeds need to be planted: seeds 79, 14, 55, and 13.

// The rest of the almanac contains a list of maps which describe how to convert numbers from a source category into numbers in a destination category. That is, the section that starts with seed-to-soil map: describes how to convert a seed number (the source) to a soil number (the destination). This lets the gardener and his team know which soil to use with which seeds, which water to use with which fertilizer, and so on.

// Rather than list every source number and its corresponding destination number one by one, the maps describe entire ranges of numbers that can be converted. Each line within a map contains three numbers: the destination range start, the source range start, and the range length.

// Consider again the example seed-to-soil map:

// 50 98 2
// 52 50 48
// The first line has a destination range start of 50, a source range start of 98, and a range length of 2. This line means that the source range starts at 98 and contains two values: 98 and 99. The destination range is the same length, but it starts at 50, so its two values are 50 and 51. With this information, you know that seed number 98 corresponds to soil number 50 and that seed number 99 corresponds to soil number 51.

// The second line means that the source range starts at 50 and contains 48 values: 50, 51, ..., 96, 97. This corresponds to a destination range starting at 52 and also containing 48 values: 52, 53, ..., 98, 99. So, seed number 53 corresponds to soil number 55.

// Any source numbers that aren't mapped correspond to the same destination number. So, seed number 10 corresponds to soil number 10.

// So, the entire list of seed numbers and their corresponding soil numbers looks like this:

// seed  soil
// 0     0
// 1     1
// ...   ...
// 48    48
// 49    49
// 50    52
// 51    53
// ...   ...
// 96    98
// 97    99
// 98    50
// 99    51
// With this map, you can look up the soil number required for each initial seed number:

// Seed number 79 corresponds to soil number 81.
// Seed number 14 corresponds to soil number 14.
// Seed number 55 corresponds to soil number 57.
// Seed number 13 corresponds to soil number 13.
// The gardener and his team want to get started as soon as possible, so they'd like to know the closest location that needs a seed. Using these maps, find the lowest location number that corresponds to any of the initial seeds. To do this, you'll need to convert each seed number through other categories until you can find its corresponding location number. In this example, the corresponding types are:

// Seed 79, soil 81, fertilizer 81, water 81, light 74, temperature 78, humidity 78, location 82.
// Seed 14, soil 14, fertilizer 53, water 49, light 42, temperature 42, humidity 43, location 43.
// Seed 55, soil 57, fertilizer 57, water 53, light 46, temperature 82, humidity 82, location 86.
// Seed 13, soil 13, fertilizer 52, water 41, light 34, temperature 34, humidity 35, location 35.
// So, the lowest location number in this example is 35.

// What is the lowest location number that corresponds to any of the initial seed numbers?

// --> Your puzzle answer was 51580674. <--

// --- Part Two ---
// Everyone will starve if you only plant such a small number of seeds. Re-reading the almanac, it looks like the seeds: line actually describes ranges of seed numbers.

// The values on the initial seeds: line come in pairs. Within each pair, the first value is the start of the range and the second value is the length of the range. So, in the first line of the example above:

// seeds: 79 14 55 13
// This line describes two ranges of seed numbers to be planted in the garden. The first range starts with seed number 79 and contains 14 values: 79, 80, ..., 91, 92. The second range starts with seed number 55 and contains 13 values: 55, 56, ..., 66, 67.

// Now, rather than considering four seed numbers, you need to consider a total of 27 seed numbers.

// In the above example, the lowest location number can be obtained from seed number 82, which corresponds to soil 84, fertilizer 84, water 84, light 77, temperature 45, humidity 46, and location 46. So, the lowest location number is 46.

// Consider all of the initial seed numbers listed in the ranges on the first line of the almanac. What is the lowest location number that corresponds to any of the initial seed numbers?

// --> Your puzzle answer was 99751240. <--

const DATA = `seeds: 630335678 71155519 260178142 125005421 1548082684 519777283 4104586697 30692976 1018893962 410959790 3570781652 45062110 74139777 106006724 3262608046 213460151 3022784256 121993130 2138898608 36769984

seed-to-soil map:
2977255263 3423361099 161177662
3464809483 1524036300 40280620
1278969303 2583891002 282823382
3766263020 1796922321 171061976
411885923 23002578 152894367
564780290 442452799 75000259
2421385924 1454220354 69815946
3348169880 3014668733 58677303
903828313 1975611534 37514769
3406847183 1396258054 57962300
4043490501 3171884304 251476795
941343082 2866714384 147954349
1089297431 1206586182 189671872
2891116902 3584538761 18778869
0 517453058 122327491
2491201870 932395829 274190353
388883345 0 23002578
3944952233 3073346036 98538268
3505090103 671222912 261172917
2073455492 2013126303 347930432
2909895771 2361056735 67359492
1561792685 3603317630 511662807
2765392223 2458166323 125724679
3168183021 4114980437 179986859
3138432925 2428416227 29750096
122327491 175896945 266555854
671222912 1564316920 232605401
3937324996 1967984297 7627237

soil-to-fertilizer map:
895998030 0 382128379
2851625320 2664267363 205943350
2518444693 3961786669 333180627
1879667741 2025490411 638776952
0 1243838521 558555556
3280896340 2870210713 1014070956
558555556 906396047 337442474
3057568670 3884281669 77505000
3135073670 1879667741 145822670
1278126409 382128379 524267668

fertilizer-to-water map:
0 1845976330 336090970
3299138007 3322545218 12048535
336090970 0 11457152
1280501317 1371665084 474311246
2583893821 3334593753 715244186
3311186542 2468197905 738651397
2468197905 3206849302 115695916
347548122 11457152 932953195
1754812563 944410347 427254737

water-to-light map:
1121222108 519789808 4326619
1125548727 524116427 429792955
1052043895 3930896885 69178213
3210593080 0 36442681
1669405426 2787769857 138341045
1919839172 3142586910 277606697
2197445869 2466152271 321617586
1555341682 3816833141 114063744
3431283943 3092543143 50043767
3481327710 1975836414 28620233
136025352 1371812880 335069822
0 3420193607 136025352
2600375975 3610804829 206028312
3247035761 36442681 184248182
3676380184 1048117966 323694914
2519063455 966805446 81312520
483991238 1706882702 268953712
3509947943 2926110902 166432241
1862332341 2408645440 57506831
752944950 220690863 299098945
2806404287 2004456647 404188793
1807746471 3556218959 54585870
471095174 953909382 12896064

light-to-temperature map:
3941111261 382813357 83783792
4083751028 2792620142 62769876
2924924808 517646744 141124785
10073304 296361721 86451636
2112077648 3356571260 325360811
2097723771 930487406 14353877
1038821361 2233157447 330985253
1604981575 0 157737476
4232208439 2231398376 1759071
3126943010 2564142700 228477442
3355420452 3681932071 528033316
3066049593 1302213021 60893417
2893234140 1091417457 31690668
4146520904 1005729922 85687535
764412615 658771529 271715877
4024895053 4212658256 21309254
1601614929 3144601228 3366646
2813498518 3276835638 79735622
0 944841283 10073304
3883453768 1363106438 57657493
1036128492 4209965387 2692869
1762719051 1160654846 141558175
2437438459 157737476 138624245
96524940 1420763931 667887675
2576062704 3147967874 128867764
1904277226 2855390018 50699775
1420621949 2906089793 129943385
1550565334 466597149 51049595
2704930468 3036033178 108568050
4046204307 1123108125 37546721
1369806614 954914587 50815335
1954977001 2088651606 142746770

temperature-to-humidity map:
3744493855 2753433800 53429527
3926657179 2806863327 207882975
567844723 1829271702 6392959
3797923382 3046866321 128733797
1711260618 465872733 110275892
2947786208 2530091374 223342426
2371290430 3335177849 39675908
1900678095 703125986 238513863
1521940365 941639849 16040471
979702084 962957535 519048585
2678536664 3987414423 22824189
316276095 2006380474 251568628
574237682 576148625 7838036
2512589774 2369848229 129456424
1821536510 386731148 79141585
659847979 2257949102 32337475
1498750669 0 23189696
2139191958 1482006120 151094619
2410966338 2361085516 8762713
248695366 629624702 67580729
1705983403 957680320 5277215
3436386005 3680199681 275987831
896869843 23189696 23822140
1540019357 265437244 43521643
3171128634 4029709925 265257371
700698880 1633100739 196170963
2659065351 4010238612 19471313
1660345362 583986661 45638041
2642046198 3175600118 17019153
4134540154 3966392426 21021997
145503080 1903188188 103192286
4155562151 3467714480 139405145
920691983 1844178087 59010101
2805227630 3192619271 142558578
692185454 1835664661 8513426
2732147574 3607119625 73080056
3712373836 3014746302 32120019
2361085516 3956187512 10204914
2701360853 2499304653 30786721
582075718 308958887 77772261
1583541000 188632882 76804362
3882034 47011836 141621046
0 699243952 3882034
1537980836 697205431 2038521
2419729051 3374853757 92860723

humidity-to-location map:
3880387060 2052152805 97611299
2442736538 3295723734 10591308
3014234548 3058886861 44150293
2722522139 3413370195 153277538
2877652345 3226748198 68975536
678696757 79205913 5515453
3758528684 3103037154 121858376
3648288667 2533118408 110240017
3457871155 4266074310 28892986
2176930761 3905620500 135283057
2312213818 2369019482 56130623
2875799677 3224895530 1852668
2052152805 3780842544 124777956
2598433171 3306315042 56382802
1279041455 278559111 48074772
2964261570 2302916483 49972978
344154771 1539624544 79809331
1030322972 1619433875 248718483
1905012367 1868152358 115533200
105230362 326633883 51970437
4085966662 2880778716 178108145
684212210 1466450827 73173717
919250672 396737705 108684083
868993622 1215278638 50257050
2962757902 2879275048 1503668
1847630888 378604320 18133385
3232700402 4040903557 225170753
2575587736 3390524760 22845435
3977998359 2425150105 107968303
3058384841 3362697844 27826916
789787709 0 79205913
4264074807 2272023994 30892489
3114006964 3594442940 118693438
460824111 202771015 75788096
423964102 1983685558 36860009
2946627881 2352889461 16130021
157200799 505421788 186953972
3486764141 2717750522 161524526
1027934755 692375760 2388217
2453327846 2149764104 122259890
2368344441 2643358425 74392097
0 1407620238 58830589
2654815973 3713136378 67706166
1865764273 117123148 39248094
3086211757 3566647733 27795207
58830589 156371242 46399773
536612207 1265535688 142084550
757385927 84721366 32401782
1327116227 694763977 520514661`

const TEST_DATA = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`

function ifYouGiveASeedAFertilizer(data) {
  const splittedData = data.split("\n")

  let initialValues = splittedData.shift().match(/\d+/g).map(Number)
  let finalValues = []
  const transformingBlocks = []

  for (const row of splittedData) {
    if (row.includes("map")) {
      transformingBlocks.push([])
    }
    if (/\d/g.test(row)) {
      transformingBlocks[transformingBlocks.length - 1].push(row.match(/\d+/g).map(Number))
    }
  }

  for (const block of transformingBlocks) {
    for (const line of block) {
      const [output, input, range] = line
      const diff = input - output
      const maxInput = input + range - 1

      for (let i = 0; i < initialValues.length; i++) {
        const current = initialValues[i]

        if (current >= input && current <= maxInput) {
          finalValues.push(current - diff)
          initialValues.splice(i, 1)
          i--
        }
      }
    }
    initialValues = initialValues.concat(finalValues)
    finalValues = []
  }

  return Math.min(...initialValues)
}

function ifYouGiveASeedAFertilizerPart2(data) {
  const splittedData = data.split("\n")

  let initialValues = []
  let finalValues = []
  let seeds = splittedData.shift().match(/\d+/g).map(Number)
  
  for (let i = 0; i < seeds.length; i+=2) {
    const value = seeds[ i ]
    const range = seeds[i + 1]
    
    initialValues.push({
      value,
      range
    })
  }
  
  const transformingBlocks = []

  for (const row of splittedData) {
    if (row.includes("map")) {
      transformingBlocks.push([])
    }
    if (/\d/g.test(row)) {
      transformingBlocks[transformingBlocks.length - 1].push(row.match(/\d+/g).map(Number))
    }
  }

  for (const block of transformingBlocks) {
    for (const line of block) {
      const [output, input, range] = line
      const diff = output - input
      const maxInput = input + range - 1

      for (let i = initialValues.length - 1; i >= 0; i--) {
        const current = initialValues[i]

        const currentRange = current.range;
        const currentMin = current.value;
        const currentMax = current.value + currentRange - 1;

        let low = null, mid = null, high = null

        if (currentMax < input) {
          low = {
            value: currentMin,
            range: currentRange
          }
        } else if (currentMin < input && currentMax <= maxInput) {
          low = {
            value: currentMin,
            range: input - currentMin
          }
          mid = {
            value: input,
            range: currentMax - input + 1
          }
        } else if (currentMin < input && currentMax > maxInput) {
          low = {
            value: currentMin,
            range: input - currentMin
          }
          mid = {
            value: input,
            range: maxInput - input + 1
          }
          high = {
            value: maxInput + 1,
            range: currentMax - maxInput
          }
        } else if (currentMin >= input && currentMax <= maxInput) {
          mid = {
            value: currentMin,
            range: currentRange
          }
        } else if (currentMin >= input && currentMin < maxInput && currentMax > maxInput) {
          mid = {
            value: currentMin,
            range: maxInput - currentMin + 1
          }
          high = {
            value: maxInput + 1,
            range: currentMax - maxInput
          }
        } else if (currentMin > maxInput) {
          high = {
            value: currentMin,
            range: currentRange
          }
        }

        if (low) {
          initialValues.push(low)
        }
        if (mid) {
          mid.value += diff
          finalValues.push(mid)
        }
        if (high) {
          initialValues.push(high)
        }
        initialValues.splice(i, 1)
      }
    }
    initialValues = initialValues.concat(finalValues)
    finalValues = []
  }
  
  let min = Infinity

  for (let i = 0; i < initialValues.length; i++) {
    const seed = initialValues[i];
    
    if (seed.value < min) min = seed.value
  }

  return min
}

const response = ifYouGiveASeedAFertilizerPart2(DATA)
console.log(response);