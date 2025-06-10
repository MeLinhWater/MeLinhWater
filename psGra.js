//MLwater 2025jun9mo tnhan@enersev
var psName=[];                          psName[0]='MUC_NUOC_BE';
    psName[1]='STATION_CURRENT_PUMP1';  psName[2]='STATION_CURRENT_PUMP2';  psName[3]='STATION_CURRENT_PUMP3';  psName[4]='STATION_CURRENT_PUMP4';
    psName[5]='STATION2_CURRENT_PUMP1'; psName[6]='STATION2_CURRENT_PUMP2'; psName[7]='STATION2_CURRENT_PUMP3'; psName[8]='STATION2_CURRENT_PUMP4';
    psName[9]='MASTER_FLOW_NUOC_THO';   psName[10]='DATA_FLOW_CLEAN_WATER'; psName[11]='STATION_HZ_PUMP4';
var psTit=[];                           psTit[0]='~ ~2 Bể Nước Sạch [m3]~ ~';
    psTit[1]='- -Pump1(A)RawWater- -';  psTit[2]='- -Pump2(A)RawWater- -';  psTit[3]='- -Pump3(A)RawWater- -';  psTit[4]='- -Pump4(A)RawWater- -';
    psTit[5]='- -Pump1(A)CleanWater- -';psTit[6]='- -Pump2(A)CleanWater- -';psTit[7]='- -Pump3(A)CleanWater- -';psTit[8]='- -Pump4(A)CleanWater- -';
    psTit[9]='LưuLượng NướcThô(m3h)';   psTit[10]='LưuLượng NướcSạch(m3h)'; psTit[11]='- -Pump4(Hz)RawWater- -'
var psColor=['royalblue','darkgreen','darkgreen','darkgreen','darkgreen','royalblue','royalblue','royalblue','royalblue','darkgreen','royalblue','darkgreen'];
var psKs=[80,1,1,1,1,1,1,1,1,0.1,0.1,1],  psDas=['','5','10','15','','5','10','15','20','','','5'];
var psXs=[500,10,10,10,10,800,800,800,800,500,500,10],psYs=[460,440,460,480,500,440,460,480,500,440,480,520],psWi=[2,2,2,2,2,2,2,2,2,2,2,2];