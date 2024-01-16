const DATA = `20 42 73 115 170 240 327 433 560 710 885 1087 1318 1580 1875 2205 2572 2978 3425 3915 4450
25 39 53 67 81 95 109 123 137 151 165 179 193 207 221 235 249 263 277 291 305
12 29 76 164 312 559 976 1678 2836 4689 7556 11848 18080 26883 39016 55378 77020 105157 141180 186668 243400
15 33 71 131 206 285 367 491 804 1710 4164 10190 23711 51809 106702 209391 397981 749035 1432725 2848761 5941580
-3 -3 6 45 156 417 980 2153 4553 9363 18732 36363 68340 124251 218670 373067 618221 997217 1569114 2413377 3635172
12 21 30 39 48 57 66 75 84 93 102 111 120 129 138 147 156 165 174 183 192
-7 -12 -7 25 100 241 508 1055 2222 4675 9605 18988 35921 65168 114446 197962 345822 627164 1203113 2441664 5157899
8 26 61 125 250 518 1113 2405 5081 10345 20218 37980 68809 120687 205660 341558 554302 880948 1373643 2104695 3172988
8 29 63 115 187 275 366 435 442 329 17 -597 -1643 -3281 -5704 -9141 -13860 -20171 -28429 -39037 -52449
17 26 49 101 197 352 581 899 1321 1862 2537 3361 4349 5516 6877 8447 10241 12274 14561 17117 19957
13 22 35 56 94 157 258 453 948 2346 6161 15809 38401 87815 189718 389450 763975 1439454 2616407 4604910 7872824
8 25 44 56 43 -24 -169 -357 -377 373 3254 11001 28763 65952 139808 282852 559230 1100809 2185188 4398318 8959855
14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 -1 -2 -3 -4 -5 -6
0 6 20 42 72 110 156 210 272 342 420 506 600 702 812 930 1056 1190 1332 1482 1640
5 9 13 17 21 25 29 33 37 41 45 49 53 57 61 65 69 73 77 81 85
15 42 96 204 410 775 1386 2400 4167 7493 14116 27474 53860 104154 196688 362880 659993 1201557 2229064 4274711 8515044
15 27 60 124 229 385 602 890 1259 1719 2280 2952 3745 4669 5734 6950 8327 9875 11604 13524 15645
2 -4 -9 -6 25 136 440 1150 2628 5444 10445 18834 32259 52912 83638 128054 190678 277068 393971 549482 753213
25 40 65 110 195 354 643 1165 2130 3987 7711 15414 31588 65493 135487 276471 552103 1074034 2031149 3732670 6670009
8 21 52 109 201 340 536 795 1145 1740 3143 6991 17437 44107 107898 251917 561426 1199103 2465650 4901305 9451837
6 17 46 96 174 298 514 931 1778 3478 6720 12491 22006 36445 56372 80672 104798 118071 99722 13306 -200946
11 30 60 101 153 216 290 375 471 578 696 825 965 1116 1278 1451 1635 1830 2036 2253 2481
16 33 72 150 301 595 1160 2213 4119 7527 13697 25272 48036 94738 192986 400697 834924 1723731 3497735 6951565 13533315
-7 -8 -9 -3 43 203 607 1456 3037 5738 10063 16647 26271 39877 58583 83698 116737 159436 213767 281953 366483
20 24 30 47 100 251 622 1410 2878 5299 8829 13317 18199 23031 30198 53409 139564 418662 1208316 3218487 7931346
8 33 72 139 274 553 1094 2064 3706 6424 10986 18928 33264 59626 107972 195007 347460 606347 1032324 1712193 2766566
-1 2 22 80 213 482 987 1894 3477 6179 10706 18193 30527 50985 85451 144621 247795 429096 747254 1300454 2248177
10 17 24 41 100 275 720 1733 3859 8065 16081 31159 59858 116178 230676 469428 971284 2017349 4154698 8407833 16627316
17 41 73 117 193 357 735 1586 3419 7198 14687 29049 55996 106236 200932 383802 747033 1484423 2995713 6083285 12309647
6 11 23 61 153 335 662 1247 2347 4515 8840 17327 33588 64352 123091 238686 475116 973511 2036781 4291061 8979563
10 21 43 87 159 258 389 614 1187 2866 7575 19706 48499 112096 243994 502677 985209 1845841 3322433 5780038 9800050
14 29 53 88 128 160 170 154 134 179 431 1136 2680 5630 10780 19202 32302 51881 80201 120056 174848
17 32 47 62 77 92 107 122 137 152 167 182 197 212 227 242 257 272 287 302 317
6 6 19 61 164 392 865 1804 3620 7083 13630 25915 48784 90993 168200 308080 558866 1003244 1780365 3119825 5392852
13 40 81 132 188 260 422 903 2239 5500 12607 26754 52950 98696 174812 296429 484161 765472 1176253 1762624 2582976
21 35 53 76 105 141 185 238 301 375 461 560 673 801 945 1106 1285 1483 1701 1940 2201
12 35 74 135 227 362 555 824 1190 1677 2312 3125 4149 5420 6977 8862 11120 13799 16950 20627 24887
4 17 38 68 119 232 517 1223 2846 6288 13099 25892 49171 91150 167824 311820 590752 1143407 2247740 4443192 8742335
24 41 64 93 135 216 412 920 2202 5266 12212 27282 58825 122835 249056 491087 942476 1761479 3207992 5697155 9875291
5 1 8 40 119 279 568 1059 1895 3423 6527 13363 28861 63659 139699 300753 631998 1296034 2598655 5108763 9878196
9 28 66 136 256 461 833 1559 3029 5988 11758 22548 41872 75097 130145 218375 355673 563780 871890 1318552 1953912
15 26 31 31 32 45 99 284 851 2423 6441 16128 38572 89098 200030 437386 931283 1929535 3890785 7647382 14697248
6 10 28 70 142 246 380 538 710 882 1036 1150 1198 1150 972 626 70 -742 -1860 -3338 -5234
21 45 94 178 302 466 664 885 1137 1540 2571 5606 14012 35225 84545 191831 412941 848695 1675412 3192762 5896866
7 10 13 16 19 22 25 28 31 34 37 40 43 46 49 52 55 58 61 64 67
8 18 49 109 209 375 679 1298 2604 5283 10493 20127 37392 68231 124758 233137 450732 901756 1848445 3828109 7908407
7 8 6 11 49 174 492 1215 2771 5999 12456 24856 47649 87731 155254 264478 434575 690258 1062066 1586089 2302865
15 20 18 11 14 60 213 599 1463 3267 6874 13940 27807 55549 112560 232584 489227 1041641 2231346 4787844 10265872
22 40 77 154 299 554 996 1782 3230 5949 11031 20319 36791 65239 113907 199122 358373 685173 1416140 3136067 7236646
-3 3 14 30 51 77 108 144 185 231 282 338 399 465 536 612 693 779 870 966 1067
16 42 80 142 248 428 730 1233 2069 3468 5853 10023 17461 30772 54161 93665 156555 249083 372155 517101 671863
3 -3 -4 5 22 34 14 -70 -201 -152 879 4994 16977 46978 115924 266658 586727 1253787 2622842 5387415 10866116
12 20 38 84 200 461 994 2017 3906 7307 13348 24100 43622 80248 151288 292083 572448 1125038 2192170 4200228 7874076
2 -6 -4 36 157 417 889 1661 2836 4532 6882 10034 14151 19411 26007 34147 44054 55966 70136 86832 106337
25 46 78 123 187 277 403 607 1048 2183 5114 12241 28496 63655 136540 282303 564347 1092632 2049906 3726495 6562361
16 24 46 103 224 441 795 1373 2413 4541 9241 19706 42275 88728 179788 350266 656382 1185902 2071848 3510665 5785866
-5 -5 -5 -14 -30 -25 70 380 1101 2515 5005 9070 15340 24591 37760 55960 80495 112875 154831 208330 275590
11 30 67 139 283 582 1211 2524 5215 10605 21153 41406 79872 152852 292296 561524 1085535 2107076 4086235 7870761 14977445
2 9 17 27 50 121 317 783 1778 3773 7677 15347 30666 61661 124393 249695 494274 958241 1811801 3334635 5972450
-7 -1 17 48 94 164 286 531 1070 2319 5283 12292 28435 64146 139580 291635 584727 1126719 2091781 3752512 6524580
23 34 48 69 116 243 582 1438 3479 8082 17923 37955 77053 150914 287438 537013 992203 1824718 3352774 6159709 11295838
5 10 28 69 143 260 430 663 969 1358 1840 2425 3123 3944 4898 5995 7245 8658 10244 12013 13975
27 42 55 65 84 154 373 941 2239 4960 10336 20570 39721 75566 143501 274594 531959 1043606 2067497 4118543 8212374
-7 -2 23 80 181 338 563 868 1265 1766 2383 3128 4013 5050 6251 7628 9193 10958 12935 15136 17573
21 27 34 58 128 296 659 1393 2799 5361 9816 17236 29122 47510 75089 115331 172633 252471 361566 508062 701716
15 23 38 84 211 521 1210 2634 5412 10584 19847 35897 62910 107200 178097 289093 459309 715341 1093548 1642850 2428109
10 19 35 70 164 396 894 1846 3514 6252 10536 17055 27033 43224 72555 132365 263902 559701 1216505 2633828 5592118
10 22 44 75 114 160 212 269 330 394 460 527 594 660 724 785 842 894 940 979 1010
15 31 59 110 202 368 664 1181 2082 3717 6921 13677 28437 60567 128708 268584 547603 1094058 2159389 4256547 8472302
8 28 63 113 178 258 353 463 588 728 883 1053 1238 1438 1653 1883 2128 2388 2663 2953 3258
24 49 88 152 259 445 798 1528 3093 6411 13211 26635 52339 100623 190660 358867 675130 1273341 2407062 4547826 8553583
17 27 39 58 107 237 529 1090 2050 3572 5892 9411 14866 23612 38052 62257 102823 170017 279269 453072 723357
17 38 79 152 287 555 1115 2299 4749 9620 18863 35602 64619 112961 190683 311741 495049 765714 1156463 1709276 2477239
-1 6 26 79 199 436 853 1528 2589 4335 7527 13965 27495 55616 111899 219533 416563 763928 1358476 2355087 4005415
-3 -1 1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37
14 23 29 43 82 177 393 858 1801 3622 7080 13821 27724 57991 125686 276844 607988 1315253 2788839 5794615 11821690
18 30 63 143 311 626 1168 2041 3376 5334 8109 11931 17069 23834 32582 43717 57694 75022 96267 122055 153075
-4 4 17 41 98 236 554 1266 2841 6273 13569 28630 58917 118781 236322 467475 924202 1828890 3615241 7108295 13834284
14 21 25 28 46 132 416 1170 2908 6535 13570 26491 49290 88388 154149 263353 443146 737185 1214943 1985438 3217006
20 47 94 171 294 501 877 1595 3001 5802 11457 22922 45961 91306 178030 338588 626082 1124417 1962136 3330853 5509344
16 33 67 132 260 510 980 1825 3289 5777 10050 17769 32932 65413 139144 310051 703659 1591044 3537510 7686105 16286453
6 14 36 99 249 567 1200 2414 4685 8857 16410 29891 53560 94282 162644 274180 450432 719344 1114160 1669555 2413147
-4 3 35 112 262 532 1017 1914 3606 6779 12576 22797 40156 68584 113492 181784 281384 420627 610337 878442 1323562
25 49 86 139 224 386 720 1397 2695 5035 9022 15491 25558 40676 62696 93933 137237 196069 274582 377707 511244
5 -1 -12 -15 21 151 463 1090 2225 4139 7202 11907 18897 28995 43237 62908 89581 125159 171920 232565 310269
11 39 85 158 270 440 702 1125 1872 3348 6509 13423 28194 58394 117221 226753 422957 763617 1341169 2303704 3889282
17 26 35 61 141 343 781 1639 3220 6062 11226 21001 40556 81609 170156 362011 772902 1635232 3403608 6950711 13934398
-6 -8 -9 -9 -8 -6 -3 1 6 12 19 27 36 46 57 69 82 96 111 127 144
14 31 72 162 341 673 1257 2252 3940 6861 12071 21626 39555 74023 142457 283793 586898 1253611 2731846 5983494 13000249
15 17 28 61 128 233 358 442 360 -73 -1017 -2334 -2914 873 18699 74262 223033 590357 1449862 3377911 7545392
3 5 10 17 34 88 235 570 1237 2439 4448 7615 12380 19282 28969 42208 59895 83065 112902 150749 198118
5 3 -1 -6 -6 31 203 743 2132 5282 11850 24844 49923 98298 193092 382667 767111 1548229 3119537 6221574 12200112
-2 5 33 111 283 608 1160 2028 3316 5143 7643 10965 15273 20746 27578 35978 46170 58393 72901 89963 109863
3 19 47 87 139 203 279 367 467 579 703 839 987 1147 1319 1503 1699 1907 2127 2359 2603
13 35 76 145 250 402 630 1021 1811 3569 7536 16205 34256 69992 137458 259465 471785 828831 1411188 2335417 3766614
8 17 28 38 56 125 363 1034 2660 6185 13202 26254 49220 87797 150089 247314 394640 612161 926024 1369718 1985536
8 25 48 77 112 153 200 253 312 377 448 525 608 697 792 893 1000 1113 1232 1357 1488
12 21 37 57 77 106 189 437 1076 2557 5818 12860 27895 59448 123950 251548 495084 943461 1740923 3114131 5409321
15 13 12 29 88 219 475 983 2051 4377 9459 20405 43526 91443 189118 385554 776487 1548205 3061254 6007625 11699548
15 24 32 34 36 74 256 853 2483 6455 15380 34237 72237 146103 285867 545187 1020019 1883403 3452614 6322987 11639994
2 -2 -9 -10 11 77 221 500 1043 2178 4715 10516 23585 52107 112228 235006 479028 952886 1854307 3536586 6618515
8 18 43 83 138 208 293 393 508 638 783 943 1118 1308 1513 1733 1968 2218 2483 2763 3058
-7 -3 17 65 168 380 794 1554 2867 5015 8367 13391 20666 30894 44912 63704 88413 120353 161021 212109 275516
5 27 60 98 140 202 340 692 1547 3449 7344 14778 28154 51056 88648 148156 239441 375671 574100 856962 1252488
11 16 32 60 108 214 483 1149 2686 6005 12795 26111 51402 98330 183979 338409 613985 1100506 1948862 3406730 5870636
23 38 73 156 324 614 1053 1660 2486 3743 6117 11437 24016 53272 118853 260775 559661 1177128 2435585 4973482 10042336
11 25 49 80 118 167 243 406 846 2079 5350 13403 31893 71974 155234 323696 661203 1340508 2727535 5609875 11688426
0 7 30 87 204 431 871 1722 3332 6279 11526 20779 37308 67691 125223 236110 450056 857463 1616214 2991911 5416508
14 13 4 -16 -50 -101 -172 -266 -386 -535 -716 -932 -1186 -1481 -1820 -2206 -2642 -3131 -3676 -4280 -4946
14 37 67 97 127 173 273 490 912 1649 2827 4579 7033 10297 14441 19476 25330 31821 38627 45253 50995
11 16 31 77 184 394 761 1351 2258 3671 6052 10516 19541 38179 75988 149960 288781 538826 972365 1698535 2877718
1 13 39 79 133 201 283 379 489 613 751 903 1069 1249 1443 1651 1873 2109 2359 2623 2901
12 27 48 77 116 167 232 313 412 531 672 837 1028 1247 1496 1777 2092 2443 2832 3261 3732
10 22 48 97 177 296 463 683 941 1173 1227 824 -462 -3175 -7856 -14772 -23420 -31712 -34726 -22885 20599
7 20 49 102 181 291 461 783 1484 3068 6616 14434 31421 67828 144541 302702 620449 1240888 2417199 4583130 8460169
9 12 19 30 45 64 87 114 145 180 219 262 309 360 415 474 537 604 675 750 829
10 27 63 136 275 524 959 1726 3117 5725 10763 20700 40469 79676 156596 305542 590960 1135287 2174803 4170928 8027451
6 12 11 14 57 224 689 1784 4102 8647 17047 31851 56937 98065 163617 265575 420798 652670 993203 1485692 2188033
9 12 29 72 150 276 492 937 2012 4739 11464 27119 61364 132165 271918 538448 1035663 1953190 3642211 6757682 12517478
-3 4 26 84 218 502 1072 2183 4324 8433 16267 30995 58095 106649 191143 333892 568223 942562 1525584 2412598 3733352
14 19 28 41 58 79 104 133 166 203 244 289 338 391 448 509 574 643 716 793 874
18 24 37 66 116 189 303 553 1256 3258 8557 21550 51502 117344 256749 542762 1113270 2221544 4320285 8197454 15190144
11 35 77 142 235 361 525 732 987 1295 1661 2090 2587 3157 3805 4536 5355 6267 7277 8390 9611
9 11 26 66 145 286 537 1006 1947 3964 8448 18423 40051 85133 175043 346645 660869 1214761 2157974 3714832 6213277
7 15 28 46 69 97 130 168 211 259 312 370 433 501 574 652 735 823 916 1014 1117
-2 -3 -5 -8 -1 59 274 838 2072 4445 8538 14869 23483 33326 41878 46690 52974 96290 298637 993983 2994435
22 46 77 112 143 168 232 514 1472 4053 9979 22145 45220 86640 158386 280488 488760 853425 1525289 2848141 5621063
8 6 0 -3 17 105 364 1032 2644 6349 14496 31666 66413 134090 261280 492531 900312 1599368 2766960 4670835 7707185
14 28 56 108 206 400 792 1583 3167 6298 12361 23817 45021 83929 155901 292238 558964 1096956 2205030 4506586 9273472
1 8 31 89 201 395 730 1331 2448 4572 8674 16677 32326 62687 120583 228363 423499 766616 1352681 2326209 3901487
17 31 53 83 121 167 221 283 353 431 517 611 713 823 941 1067 1201 1343 1493 1651 1817
0 -5 -3 20 84 216 449 822 1402 2387 4416 9320 21716 52113 122650 277395 600628 1249279 2510623 4904888 9366748
16 32 50 70 92 116 142 170 200 232 266 302 340 380 422 466 512 560 610 662 716
24 33 56 121 277 608 1267 2552 5053 9914 19295 37223 71249 135773 258702 494493 949007 1825758 3510739 6727468 12822050
11 18 28 49 106 257 614 1370 2842 5564 10512 19640 37104 71950 143831 294852 613598 1283112 2675755 5539955 11367623
5 8 10 6 -9 -40 -92 -170 -279 -424 -610 -842 -1125 -1464 -1864 -2330 -2867 -3480 -4174 -4954 -5825
14 20 37 84 191 403 786 1433 2480 4164 6994 12177 22564 44578 91878 191917 397078 802720 1575223 2993958 5511977
20 30 39 48 59 87 191 539 1522 3931 9213 19827 39722 74940 134283 229855 377161 594723 905355 1349742 2049180
5 19 49 122 279 578 1107 2011 3546 6193 10896 19530 35758 66500 124312 231059 423363 760415 1334859 2287586 3827417
6 10 20 53 134 312 695 1517 3272 6998 14894 31659 67349 143308 304080 640540 1333491 2734047 5510188 10914195 21276343
20 45 99 211 439 896 1790 3476 6517 11755 20418 34380 56950 95189 166074 311373 630704 1350358 2959773 6473472 13924803
17 42 92 191 373 680 1162 1888 2982 4698 7553 12566 21742 39173 73663 144918 297591 631686 1365346 2958925 6350507
6 6 3 8 47 161 406 853 1588 2712 4341 6606 9653 13643 18752 25171 33106 42778 54423 68292 84651
-5 -13 -12 12 73 198 465 1074 2454 5411 11352 22723 44070 84753 165628 334463 699244 1496046 3220671 6873853 14403602
-1 -3 4 35 113 266 532 986 1817 3512 7261 15806 35163 78034 170462 364705 764132 1571713 3185657 6390725 12745254
8 29 64 111 166 223 274 309 316 281 188 19 -246 -629 -1154 -1847 -2736 -3851 -5224 -6889 -8882
17 25 32 44 79 170 374 808 1743 3789 8204 17379 35631 70653 136460 259674 492925 942701 1825264 3574962 7046935
6 1 -8 -14 3 96 390 1145 2847 6330 12931 24679 44518 76563 126387 201336 310868 466911 684234 980824 1378261
12 24 48 80 106 112 104 128 288 784 2043 5111 12648 31200 76075 181425 420540 945688 2064266 4380234 9049078
15 27 48 77 112 162 284 671 1832 4920 12279 28296 60659 122137 233013 424316 742013 1252337 2048442 3258591 5056098
1 4 8 18 57 183 526 1359 3217 7078 14620 28568 53145 94641 162114 268237 430305 671416 1021840 1520590 2217209
15 30 56 107 209 407 772 1408 2459 4116 6624 10289 15485 22661 32348 45166 61831 83162 110088 143655 185033
12 33 72 148 291 544 983 1768 3238 6063 11466 21528 39589 70758 122545 205628 334768 529885 817308 1231212 1815255
11 13 12 16 44 138 386 966 2232 4874 10195 20559 40075 75593 138099 244607 420657 703539 1146374 1823194 2835174
22 36 61 106 180 292 451 666 946 1300 1737 2266 2896 3636 4495 5482 6606 7876 9301 10890 12652
21 46 92 179 341 642 1214 2333 4556 8947 17415 33160 61158 108502 184274 298560 460519 676672 953882 1318697 1878747
21 31 40 41 20 -52 -230 -599 -1237 -2062 -2428 -258 9595 38227 107657 259844 574662 1209142 2487229 5105340 10590935
21 31 32 20 -9 -59 -134 -238 -375 -549 -764 -1024 -1333 -1695 -2114 -2594 -3139 -3753 -4440 -5204 -6049
20 45 77 111 142 165 175 167 136 77 -15 -145 -318 -539 -813 -1145 -1540 -2003 -2539 -3153 -3850
24 37 45 46 42 51 127 389 1075 2672 6236 14115 31431 68872 147600 307404 619626 1206871 2272087 4140276 7316880
24 47 77 127 233 460 920 1829 3648 7382 15157 31274 64087 129335 256082 497340 948984 1783001 3304813 6049833 10942109
10 16 20 15 0 -12 14 143 478 1168 2416 4487 7716 12516 19386 28919 41810 58864 81004 109279 144872
21 31 41 51 61 71 81 91 101 111 121 131 141 151 161 171 181 191 201 211 221
23 43 84 158 278 455 694 989 1317 1631 1852 1860 1484 491 -1426 -4661 -9709 -17181 -27820 -42518 -62334
-2 -1 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
11 16 21 26 31 36 41 46 51 56 61 66 71 76 81 86 91 96 101 106 111
23 32 51 90 156 255 394 583 837 1178 1637 2256 3090 4209 5700 7669 10243 13572 17831 23222 29976
6 3 13 59 179 426 864 1556 2543 3821 5334 7013 8902 11420 15811 24830 43700 81351 151915 276399 484389
2 6 25 67 150 313 623 1186 2198 4124 8178 17404 38836 87453 192952 410747 839074 1644650 3100007 5636409 9917170
27 48 86 149 245 382 568 811 1119 1500 1962 2513 3161 3914 4780 5767 6883 8136 9534 11085 12797
5 19 33 55 116 281 660 1419 2791 5087 8707 14151 22030 33077 48158 68283 94617 128491 171413 225079 291384
18 46 90 149 223 329 541 1081 2500 5993 13897 30446 62937 123648 233214 426802 765446 1356448 2388988 4194211 7343299
11 11 21 50 124 300 680 1425 2769 5033 8639 14124 22154 33538 49242 70403 98343 134583 180857 239126 311592
7 30 76 151 254 378 525 756 1303 2778 6539 15342 34563 74575 155393 315560 628571 1232082 2377922 4514749 8420336
21 49 100 184 325 569 996 1746 3084 5569 10475 20762 43142 92165 197805 418804 865087 1733953 3366542 6333348 11560371
11 23 35 47 59 71 83 95 107 119 131 143 155 167 179 191 203 215 227 239 251
3 8 13 18 23 28 33 38 43 48 53 58 63 68 73 78 83 88 93 98 103
14 17 20 23 26 29 32 35 38 41 44 47 50 53 56 59 62 65 68 71 74
29 44 63 91 135 207 339 631 1365 3230 7715 17739 38599 79329 154575 287103 511069 876192 1452983 2339195 3667671
-4 -4 9 57 175 421 889 1730 3206 5830 10684 20072 38788 76514 152291 302740 596900 1162388 2230311 4210263 7812169
-5 5 34 89 177 305 480 709 999 1357 1790 2305 2909 3609 4412 5325 6355 7509 8794 10217 11785
17 32 63 137 305 658 1362 2729 5355 10395 20135 39199 77043 152902 305171 608512 1204200 2353225 4529206 8582564 16034588
28 44 62 82 104 128 154 182 212 244 278 314 352 392 434 478 524 572 622 674 728
13 27 62 132 252 437 718 1201 2202 4492 9681 20773 42974 85002 161527 298053 540574 973550 1750651 3142119 5598111
9 25 58 120 230 428 809 1596 3274 6808 13975 27862 53637 99838 180763 321314 567277 1007298 1819268 3366505 6394114
0 9 30 77 182 410 883 1813 3544 6603 11760 20097 33086 52676 81389 122425 179776 258349 364098 504165 687030
-5 1 22 70 167 350 679 1249 2211 3826 6620 11787 22111 43857 90325 188080 387275 777983 1515058 2854764 5207255
7 15 23 32 43 57 75 98 127 163 207 260 323 397 483 582 695 823 967 1128 1307
19 23 34 70 165 377 810 1663 3315 6450 12236 22625 40977 73482 132324 242276 453523 865081 1665326 3198992 6073677
22 47 78 115 167 257 422 712 1200 2027 3541 6681 13955 31726 75129 177921 411197 917897 1976121 4117455 8355354
-2 12 43 98 201 409 835 1692 3381 6655 12900 24583 45926 83874 149434 259471 439056 724470 1166977 1837488 2832247
21 31 54 100 180 303 467 654 855 1176 2114 5147 13858 35914 86351 192779 403321 798341 1507302 2732430 4781248
1 10 32 71 137 257 491 959 1894 3745 7363 14312 27356 51182 93428 166094 287423 484348 795610 1275661 1999475
22 28 37 53 80 122 183 267 378 520 697 913 1172 1478 1835 2247 2718 3252 3853 4525 5272
14 25 30 30 28 39 108 345 1005 2676 6703 16099 37423 84516 185710 397426 829545 1692920 3389905 6691225 13089923
24 47 79 126 211 380 708 1305 2322 3957 6461 10144 15381 22618 32378 45267 61980 83307 110139 143474 184423
27 50 95 181 333 582 965 1525 2311 3378 4787 6605 8905 11766 15273 19517 24595 30610 37671 45893 55397
4 4 6 25 95 289 755 1774 3854 7899 15559 30028 57906 113430 227640 467231 971500 2021814 4167860 8450995 16791197
16 33 60 110 207 403 802 1595 3128 6050 11619 22291 42812 82254 157962 303601 586212 1142943 2259690 4536000 9220961
-1 -1 11 54 149 323 634 1243 2578 5657 12672 28006 59994 123993 247753 480751 910145 1687419 3071729 5498542 9685515`

const TEST_DATA = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`

function mirageMaintenance(data) {
  const result = data.split("\n")
    .map(row => {
      const initial = row.split(" ").map(Number)
      const result = [initial]

      while (!result[0].every(n => n === 0)) {
        const current = result[0]
        const newRow = []

        for (let i = 0; i < current.length - 1; i++) {
          const a = current[i];
          const b = current[i + 1];
          newRow.push(b - a)
        }

        result.unshift(newRow)
      }

      let prediction = 0

      for (let i = 1; i < result.length; i++) {
        prediction += result[i][result[i].length - 1];
      }

      return prediction
    })

    return result.reduce((acc, curr) => acc + curr,0)
}

function mirageMaintenancePart2(data) {
  const result = data.split("\n")
    .map(row => {
      const initial = row.split(" ").map(Number)
      const result = [initial]

      while (!result[0].every(n => n === 0)) {
        const current = result[0]
        const newRow = []

        for (let i = 0; i < current.length - 1; i++) {
          const a = current[i];
          const b = current[i + 1];
          newRow.push(b - a)
        }

        result.unshift(newRow)
      }

      let prediction = 0

      for (let i = 1; i < result.length; i++) {
        prediction = result[i][0] - prediction
      }

      return prediction
    })

    return result
      .reduce((acc, curr) => acc + curr,0)
}

const response = mirageMaintenancePart2(DATA)
console.log(response);