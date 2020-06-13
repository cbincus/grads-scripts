'reinit'
'open tstm_gfs.ctl'

'constants'
setmap()
'define_colors'
setrgb()

'q time' 
times = sublin(result,1) 
runtime = subwrd(times,3)
hour = substr(runtime,1,2)
date = substr(runtime,4,2)
month = substr(runtime,6,3)
if (month = 'JAN') ; month = '[nvar[' ; endif
if (month = 'FEB') ; month = 'dekabr[' ; endif
if (month = 'MAR') ; month = 'marta' ; endif
if (month = 'APR') ; month = 'aprel[' ; endif
if (month = 'MAY') ; month = 'ma[' ; endif
if (month = 'JUN') ; month = 'iyn[' ; endif
if (month = 'JUL') ; month = 'iyl[' ; endif
if (month = 'AUG') ; month = 'avgusta' ; endif
if (month = 'SEP') ; month = 'sent[br[' ; endif
if (month = 'OCT') ; month = 'okt[br[' ; endif
if (month = 'NOV') ; month = 'no[br[' ; endif
if (month = 'DEC') ; month = 'dekabr[' ; endif
year = substr(runtime,9,4)' g.'
runtime1 = hour' SGV 'date' 'month' 'year

'set lat 35 55'
'set lon 15 47'
'set mpvals 20 42 41 52'

'set lev 1000 100'
'hgeom = hgtprs*rearth/(rearth-hgtprs)'
'hsfc = hgtsfc*rearth/(rearth-hgtsfc)'
'hagl = hgeom-hsfc'

'set lev 1000'
laplace(prmslmsl)
'lap1 = 9e8*laplac'
'slp = prmslmsl/100'
'set gxout shade2b'
'set clevs -20 -18 -16 -14 -12 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9 10 12 14 16 18 20'
'set ccols 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114'
'd lap1'
'cbarm'
'set gxout contour'
'set cint 0.5'
'set clopts -1 -1 0.07'
'set clab forced'
'set cthick 10'
'set ccolor 1'
'd slp'
'set gxout stream'
'set cthick 1'
'set ccolor 0'
'd ugrd30_0mb ; vgrd30_0mb'
'draw shp countries'
drawairptmd()
'draw title `6Laplasian privedennogo davleni[ `1[`6gPa/(300 km)`a2`n`1] `6(zalivka)\`6Linii toka v sloe 0-30 gPa nad podst. pov-t`y, `1QNH [`6gPa`1] `6(izolinii)\`6Analiz modeli `1NCEP GFS`6 za 'runtime1
'printim laplac_qnh_stream_md_'runtime'.png x1100 y850'
'c'

'w10m = mag(ugrd10m,vgrd10m)'
'set gxout shade2b'
'set clevs 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25'
'set ccols 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114'
'd w10m'
'cbarm'
'set gxout stream'
'set ccolor 0'
'd ugrd10m ; vgrd10m'
'set gxout contour'
'set cint 0.5'
'set clopts -1 -1 0.07'
'set clab forced'
'set cthick 10'
'set ccolor 1'
'd slp'
'draw shp countries'
drawairptmd()
'draw title `6Veter na v#sote 10 m nad podst. pov-t`y `1[`6m/s`1], QNH [`6gPa`1]\`6Analiz modeli `1NCEP GFS`6 za 'runtime1
'printim w10m_qnh_md_'runtime'.png x1100 y850'
'c'

'set gxout shade2b'
'set clevs 0 10 50 100 200 300 400 500 600 700 800 900 1000 1200 1400 1600 1800 2000 2250 2500 2750 3000 3500 4000 4500 5000'
'set ccols 0 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114'
'd cape255_0mb'
'cbarm'
'set gxout contour'
'set clab on'
'set ccolor 1'
'set cmin 0'
'set cint 2'
'd no4lftxsfc'
'set cmax 0'
'set ccolor 0'
'set cstyle 3'
'set cint 1'
'd no4lftxsfc'
'draw shp countries'
drawairptmd()
'draw title `1MUCAPE `1[`6Dj/kg`1] `6(zalivka), `1MULI [`3.`6S`1] `6(izolinii)\`6Analiz modeli `1NCEP GFS`6 za 'runtime1
'printim mucape_muli_qnh_md_'runtime'.png x1100 y850'
'c'

'tksum = 0'
'rhsum = 0'
'hgt = 1500'
'i = 0'
while (hgt <= 5500)
zinterp(tmpprs,hagl,hgt)
'tk = interp'
'tksum = tksum+tk'
zinterp(rhprs,hagl,hgt)
'rh = interp'
'rhsum = rhsum+rh'
'hgt = hgt+500'
'i = i+1'
endwhile
'tave = tksum/i'
'rhave = rhsum/i'
td(tave,rhave)
'dsum = 3*(tksum-td)'
'set gxout shade2b'
'set clevs -13 -12 -11 -10 -9 -8 -7 -6 -5 -4.5 -4 -3.5 -3 -2.5 -2 -1.5 -1 -0.5 0 0.5 1 1.5 2 2.5 3 3.5 4'
'set ccols 113 112 111 110 109 108 107 106 105 104 103 102 101 100 99 98 97 96 95 94 93 92 91 90 89 88 87 0'
'd no4lftxsfc'
'cbarm'
'set gxout contour'
'set clab on'
'set ccolor 1'
'set cmin 0'
'set cint 2'
'd no4lftxsfc'
'set cmax 0'
'set ccolor 0'
'set cstyle 3'
'set cint 1'
'd no4lftxsfc'
'set gxout grid'
'set gridln off'
'set ccolor 1'
'set digsiz 0.055'
skipint(dsum)
'draw shp countries'
drawairptmd()
'draw title `1MULI [`3.`6S`1] `6(zalivka, izolinii)\`6Summarn#q deficit `1T`bd`n`6 v sloe 850-500 gPa `1[`3.`6S`1] `6(setka)\`6Analiz modeli `1NCEP GFS`6 za 'runtime1
'printim muli_dsum_md_'runtime'.png x1100 y850'
'c'

'ustm = ave(ugrdprs,lev=700,lev=500)'
'vstm = ave(vgrdprs,lev=700,lev=500)'
'wave = mag(ustm,vstm)'
'k = (9.2+0.29*wave)/(wave+3.5)'
'wstm = 3.6*k*wave'
'set gxout shade2b'
'set clevs 5 10 15 20 25 30 35 40 45 50 60 70 80 90 100'
'set ccols 88 89 90 92 94 96 98 99 101 103 105 107 109 111 112 114'
'd wstm'
'cbarm'
'set gxout stream'
'set ccolor 1'
'set cthick 1'
'd ustm ; vstm'
'draw shp countries'
drawairptmd()
'draw title `6Dvijenie `1Cb `6(700-500 gPa) `1[`6km`1/`6]`1]\`6Analiz modeli `1NCEP GFS`6 za 'runtime1
'printim stm_md_'runtime'.png x1100 y850'
'c'

zinterp(tmpprs,hagl,1500)
't15 = interp'
'tc15 = t15-273.15'
zinterp(rhprs,hagl,1500)
'rh15 = interp'
td(t15,rh15)
'td15 = td-273.15'
zinterp(ugrdprs,hagl,1500)
'u15 = interp'
zinterp(vgrdprs,hagl,1500)
'v15 = interp'
'w15 = 1.94384449*mag(u15,v15)'
'dd15 = 57.2957795131*atan2(u15,v15)+180'
zinterp(tmpprs,hagl,5500)
't55 = interp-273.15'
zinterp(ugrdprs,hagl,5500)
'u55 = interp'
zinterp(vgrdprs,hagl,5500)
'v55 = interp'
'w55 = 1.94384449*mag(u55,v55)'
'dd55 = 57.2957795131*atan2(u55,v55)+180'
'tti = tc15+td15-2*t55'
sweat(td15,tti,w15,w55,dd15,dd55)
'set gxout shade2b'
'set clevs 50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800'
'set ccols 88 89 90 92 94 96 98 99 101 103 105 107 109 111 112 114 116'
'd sweat'
'cbarm'
'set gxout contour'
'set clab on'
'set cint 100'
'd sweat'
'set gxout contour'
'set cint 0.5'
'set clopts -1 -1 0.07'
'set clab forced'
'set cthick 10'
'set ccolor 1'
'd slp'
'draw shp countries'
drawairptmd()
'draw title `6Indeks `1SWEAT`6, `1QNH [`6gPa`1]\`6Analiz modeli `1NCEP GFS`6 za 'runtime1
'printim sweat_qnh_md_'runtime'.png x1100 y850'
'c'

zinterp(ugrdprs,hagl,3000)
'u3 = interp'
zinterp(vgrdprs,hagl,3000)
'v3 = interp'
'ws03 = mag(u3-ugrd10m,v3-vgrd10m)'
'set lev 800 200'
tadv(tmpprs,ugrdprs,vgrdprs)
'set lev 700'
zinterp(ta,hagl,3000)
'ta3 = interp'
mcsi(no4lftxsfc,ws03,ta3)
'u30 = maskout(ugrd30_0mb,mcsi+1.5)'
'v30 = maskout(vgrd30_0mb,mcsi+1.5)'
'set gxout shade2b'
'set clevs -1.5 0 1.5 3'
'set ccols 0 98 99 102 105'
'd mcsi'
'cbarm'
'set gxout stream'
'set ccolor 4'
'd u30 ; v30'
'set gxout contour'
'set cint 0.5'
'set clopts -1 -1 0.07'
'set clab forced'
'set cthick 10'
'set ccolor 1'
'd slp'
'draw shp countries'
drawairptmd()
'draw title `6Indeks `1MCS`6, `1QNH [`6gPa`1]\`6Linii toka v sloe 0-30 gPa nad podst. pov-t`y\`6Analiz modeli `1NCEP GFS`6 za 'runtime1
'printim mcsi_qnh_md_'runtime'.png x1100 y850'
'c'

'set gxout shade2b'
'set clevs 50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800'
'set ccols 88 89 90 92 94 96 98 99 101 103 105 107 109 111 112 114 116'
'd sweat'
'cbarm'
'set gxout contour'
'set ccolor 2'
'set cint 1.5'
'set cmin -1.5'
'set cthick 10'
'd mcsi'
'draw shp countries'
drawairptmd()
'draw title `6Indeks# `1SWEAT `6(zalivka), `1MCS\`6Analiz modeli `1NCEP GFS`6 za 'runtime1
'printim sweat_mcsi_md_'runtime'.png x1100 y850'
'c'

'q = 1000*spfh30_0mb'
'set gxout shade2b'
'set clevs 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 18 20'
'set ccols 0 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137'
'd q'
'cbarm'
'set gxout stream'
'set ccolor 0'
'set cthick 1'
'd ugrd30_0mb ; vgrd30_0mb'
'set gxout contour'
'set ccolor 2'
'set cint 1.5'
'set cmin -1.5'
'set cthick 10'
'd mcsi'
'draw shp countries'
drawairptmd()
'draw title `6Udelna[ vlajnost` `1[`6g/kg`1]\`6i linii toka v sloe 0-30 gPa nad podst. pov-t`y, indeks `1MCS\`6Analiz modeli `1NCEP GFS`6 za 'runtime1
'printim q_stream_mcsi_md_'runtime'.png x1100 y850'
'c'

function td(t,rh)
'g0 = -2.8365744e3'
'g1 = -6.028076559e3'
'g2 = 1.954263612e1'
'g3 = -2.737830188e-2'
'g4 = 1.6261698e-5'
'g5 = 7.0229056e-10'
'g6 = -1.8680009e-13'
'g7 = 2.7150305'
'lnes = 0'
i = 0
while (i <= 6)
'lnes = lnes+g'i'*pow('t','i'-2)'
i = i+1
endwhile
'lnes = lnes+g7*log('t')'
'es = exp(lnes)'
'ec = 0.01*'rh'*es'
'lnec = log(ec)'
'c0 = 2.0798233e2'
'c1 = -2.0156028e1'
'c2 = 4.6778925e-1'
'c3 = -9.2288067e-6'
'd0 = 1'
'd1 = -1.3319669e-1'
'd2 = 5.6577518e-3'
'd3 = -7.5172865e-5'
'sumc = 0'
'sumd = 0'
i = 0
while (i <= 3)
'sumc = sumc+c'i'*pow(lnec,'i')'
i = i+1
endwhile
i = 0
while (i <= 3)
'sumd = sumd+d'i'*pow(lnec,'i')'
i = i+1
endwhile
'td = sumc/sumd'
i = 0
while (i <= 7)
'undefine g'i''
i = i+1
endwhile
i = 0
while (i <= 3)
'undefine c'i''
'undefine d'i''
i = i+1
endwhile
'undefine lnes'
'undefine lnec'
'undefine sumc'
'undefine sumd'
return

function sweat(td850,tti,w850,w500,dir850,dir500)
'td850term = const(12*maskout('td850','td850'),0,-u)'
'ttiterm = const(maskout(20*('tti'-49),'tti'-49),0,-u)'
'w850term = 2*'w850''
'w500term = 'w500''
'deltadir = 0.0174532925*('dir500'-'dir850')'
'deltadir = maskout(deltadir,'dir850'-130)'
'deltadir = maskout(deltadir,250-'dir850')'
'deltadir = maskout(deltadir,'dir500'-210)'
'deltadir = maskout(deltadir,310-'dir500')'
'deltadir = maskout(deltadir,deltadir)'
'deltadir = maskout(deltadir,'w850'-15)'
'deltadir = maskout(deltadir,'w500'-15)'
'sterm = const(125*(sin(deltadir)+0.2),0,-u)'
'sweat = td850term+ttiterm+w850term+w500term+sterm'
'undefine td850term'
'undefine ttiterm'
'undefine w850term'
'undefine w500term'
'undefine deltadir'
'undefine sterm'
return

function tadv(t,u,v)
'constants'
'dtx = cdiff('t',x)'
'dty = cdiff('t',y)'
'dx = cdiff(lon,x)*3.14159265359/180'
'dy = cdiff(lat,y)*3.14159265359/180'
'ta = -1*(('u'*dtx)/(cos(lat*3.14159265359/180)*dx)+'v'*dty/dy)/rearth'
return

function mcsi(li,ws03,ta7)
'mcsi = -('li'+4.4)/3.3+('ws03'-11.5)/5+('ta7'-4.5e-5)/7.3e-5'
return

function ws(u1,v1,u2,v2)
'ws = mag('u2'-'u1','v2'-'v1')'
return

function setrgb()
'set rgb 80 100 0 100'
'set rgb 81 130 0 130'
'set rgb 82 160 0 160'
'set rgb 83 200 0 200'
'set rgb 84 250 0 254'
'set rgb 85 210 0 254'
'set rgb 86 170 0 254'
'set rgb 87 130 0 254'
'set rgb 88 90 0 254'
'set rgb 89 0 50 254'
'set rgb 90 0 100 254'
'set rgb 91 0 150 254'
'set rgb 92 0 200 254'
'set rgb 93 0 230 240'
'set rgb 94 0 230 160'
'set rgb 95 0 230 120'
'set rgb 96 0 230 80'
'set rgb 97 0 240 40'
'set rgb 98 0 250 0'
'set rgb 99 254 254 0'
'set rgb 100 254 225 0'
'set rgb 101 254 200 0'
'set rgb 102 254 175 0'
'set rgb 103 254 150 0'
'set rgb 104 230 125 0'
'set rgb 105 230 100 0'
'set rgb 106 220 75 30'
'set rgb 107 200 50 30'
'set rgb 108 180 25 30'
'set rgb 109 170 0 30'
'set rgb 110 180 0 50'
'set rgb 111 200 0 100'
'set rgb 112 254 0 150'
'set rgb 113 254 0 200'
'set rgb 114 254 0 250'
'set rgb 115 225 0 225'
'set rgb 116 200 0 200'
'set rgb 117 175 0 175'
'set rgb 118 150 0 150'
'set rgb 119 125 0 125'

'set rgb 120 255 255 200'
'set rgb 121 255 255 160'
'set rgb 122 255 255 120'
'set rgb 123 255 255 0'
'set rgb 124 220 255 0'
'set rgb 125 180 240 30'
'set rgb 126 80 255 80'
'set rgb 127 30 255 190'
'set rgb 128 0 255 255'
'set rgb 129 0 215 255'
'set rgb 130 0 180 255'
'set rgb 131 0 100 255'
'set rgb 132 0 0 255'
'set rgb 133 70 0 210'
'set rgb 134 120 0 180'
'set rgb 135 140 0 150'
'set rgb 136 180 30 160'
'set rgb 137 200 60 175'
return

function drawairptmd(args)
'set string 1 l 1 0' 
'set strsiz 0.06' 
drawone(28.93098,46.92774,LUKK)
drawone(27.916668,47.8833,LUBL)
drawone(30.66667,46.43098,UKOO)
drawone(31.91972,47.05778,UKON)
drawone(28.6425,49.23667,UKWW)
drawone(24.70685,48.88757,UKLI)
drawone(30.88333,50.33333,UKBB)
drawone(23.95,49.8,UKLL)
drawone(26.14,50.61,UKLR)
drawone(33.20806,48.04414,UKDR)
drawone(32,49.4,UKKE)
drawone(37.73333,48.06667,UKCC)
drawone(35.1,48.35,UKDD)
drawone(35.31583,47.86694,UKDE)
drawone(37.45,47.06667,UKCM)
drawone(33.975,45.05222,UKFF)
drawone(22.26333,48.63417,UKLU)
drawone(36.28333,49.91667,UKHH)
drawone(25.98167,48.25972,UKLN)
drawone(39.37472,48.41806,UKCW)
drawone(34.7625,50.85833,UKHS)
drawone(26.10361,44.50361,LRBS)
drawone(26.91028,46.52194,LRBC)
drawone(28.48833,44.36222,LRCK)
drawone(27.62,47.17889,LRIA)
drawone(24.08556,45.78583,LRSB)
drawone(28.71444,45.06278,LRTC)
drawone(23.46639,47.65833,LRBM)
drawone(23.68611,46.785,LRCL)
drawone(26.35417,47.6875,LRSV)
drawone(24.4125,46.46778,LRTM)
drawone(21.26194,46.17667,LRAR)
drawone(23.88861,44.31806,LRCV)
drawone(21.9025,47.02528,LROD)
drawone(22.88556,47.70333,LRSM)
drawone(21.33806,45.81,LRTR)
drawone(27.51528,42.57028,LBBG)
drawone(27.83,43.23722,LBWN)
drawone(25.71289,43.15144,LBGO)
drawone(25.42028,42.59472,LBKA)
drawone(24.85083,42.06778,LBPD)
drawone(26.035,42.72583,LBSZ)
drawone(23.40833,42.695,LBSF)
drawone(19.26194,47.43944,LHBP)
drawone(21.24111,48.66306,LZKZ)
drawone(20.30917,44.81833,LYBE)
drawone(19.06667,50.46667,EPKT)
drawone(19.78472,50.07778,EPKK)
drawone(22.69028,51.23194,EPLB)
drawone(36.59,50.64389,UUOB)
drawone(36.29666,51.75166,UUOK)
drawone(39.23,51.815,UUOO)
drawone(39.81833,47.25833,URRR)
drawone(37.34731,45.00222,URKA)
drawone(39.15,45.03444,URKK)
drawone(39.9425,43.44388,URSS)
drawone(42.11333,45.11,URMT)
drawone(21.62694,41.96111,LWSK)
drawone(21.88694,43.33722,LYNI)
drawone(19.83389,45.38574,LYNS)
return

function drawone(arg1, arg2, arg3) 
'q w2xy 'arg1' 'arg2''
x=subwrd(result,3) 
y=subwrd(result,6) 
'draw mark 3 'x' 'y' 0.03'
'draw string 'x+0.03' 'y' 'arg3''
return 

function laplace(field)
*----------------------------------------------------------------------
*-----------------------------------------------------------------------
* Leo Kroon (leo.kroon@wur.nl) / Wageningen University MAQ 
* 26/sep/03
* Function to calculate the Laplacian of a scalar field
* simple version
*
* Arguments:
*    field  = name of the scalar variable  (input)
*
*    laplac = name of the field holding the laplacian (output)
*-----------------------------------------------------------------------
*-------------------- BEGINNING OF FUNCTION ----------------------------
*-----------------------------------------------------------------------
*
* constants
*
"degtorad = 3.14159265359/180"
"earthradius = 6.3781e6"
"tcos = cos(lat*degtorad)"
*
* Horizontal increments
*
"dy   = cdiff(lat,y)*degtorad"
"dx   = cdiff(lon,x)*degtorad"
*
* first derivatives
*
"dhy  = cdiff("field",y)"
"dhx  = cdiff("field",x)"
"dhdy = tcos*dhy/dy"
"dhdx = dhx/dx"
*
* second derivatives
*
"c2hy = cdiff(dhdy,y)"
"c2hx = cdiff(dhdx,x)"
"d2hy = tcos*c2hy/dy"
"d2hx = c2hx/dx"
*
* Laplacian in spherical coordinates
*
"laplac = (1/(earthradius*earthradius*tcos*tcos))*(d2hx+d2hy)"
*
* Variable laplac now holds 3-D laplacian field and its name is returned
* for use by the user. All other variables are undefined, to free up space.
*
"undefine degtorad"
"undefine earthradius"
"undefine tcos"
"undefine dy"
"undefine dx"
"undefine dhy"
"undefine dhx"
"undefine dhdy"
"undefine dhdx"
"undefine c2hy"
"undefine c2hx"
"undefine d2hy"
"undefine d2hx"
Return

*
* This function does a d skip(ugrd,n);v
* where n is automatically set to an appropriate value
*
* usage: d_uv ugrd vgrd 
*
* v1.1 w. ebisuzaki
* v1.2 4/6/98 revised empirical formula for skip
*
function skipint(arg)
var = subwrd(arg,1)
*u = subwrd(arg,1)
*v = subwrd(arg,2)

* get lat/lon info
'query dims'
lons = sublin(result,2)
lats = sublin(result,3)
dx = subwrd(lons,13) - subwrd(lons,11)
dy = subwrd(lats,13) - subwrd(lats,11)

* Determine skip factor 
dn = dx
if (dy > dx) ; dn = dy ; endif
skip = dn / 50 + 0.5
if (skip < 1) ; skip=1 ; endif

* Display the plot
*'d skip('u','skip');'v
'd skip('var','skip')'
return

function setmap()
'set mproj nps'
'set lon -45 75'
'set lat 25 75'
'set mpvals -14 42 30 70'
'set mpdraw off'
'set parea 0.02 10.54 0.8 7.50'
'set display color white'
return

function zinterp(field,zgrid,zlev)
*----------------------------------------------------------------------
* 
* Bob Hart (hart@ems.psu.edu) /  PSU Meteorology
* 3/4/1999
*
* GrADS function to interpolate within a 3-D grid to a specified
* height level.  Can also be used on non-pressure level data, such
* as sigma or eta-coordinate output where height is a function
* of time and grid level.
* 
* Advantages:  Easy to use, no UDFs.  Disadvantages:  Can take 3-10 secs.
*
* Arguments:
*    field = name of 3-D grid to interpolate
*
*    zgrid = name of 3-D grid holding height values at each gridpoint
*            Units of measurement are arbitrary.
*
*    zlev  = height level at which to interpolate (having same units as zgrid)
*
* Function returns:  defined grid interp holding interpolated values
*
* NOTE:  Areas having zlev below bottom level or above upper level 
*        in output will be undefined.
*
* NOTE:  No distinction in the function is made between height above
*        sea level, height above ground surface, or geopotential. The
*        function will give output regardless of which is sent.  
*        It is up to the user to be aware which height variable is
*        being passed to the function and treat the output accordingly.
*
* Example function calls:
*
*      "d "zinterp(temp,height,5000)
*
* Would display a temperature field interpolated to 5000.
*      
*      "t1000="zinterp(temp,height,1000)
*
* Would a new variable, t1000, as a temp field at 1000.
*
*      "d p1000="zinterp(lev,height,1000)
*
* Would display a field of the pressure at a height of 1000.
*
* PROBLEMS:  Send email to Bob Hart (hart@ems.psu.edu)
* 
*-----------------------------------------------------------------------
*-------------------- BEGINNING OF FUNCTION ----------------------------
*-----------------------------------------------------------------------
*
* Get initial dimensions of dataset so that exit dimensions will be
* same

"q dims"
rec=sublin(result,4)
ztype=subwrd(rec,3)
if (ztype = "fixed") 
   zmin=subwrd(rec,9)
   zmax=zmin
else
   zmin=subwrd(rec,11)
   zmax=subwrd(rec,13)
endif

* Get full z-dimensions of dataset.

"q file"
rec=sublin(result,5)
zsize=subwrd(rec,9)

* Determine spatially varying bounding height levels for height surface
* zabove = height-value at level above ; zbelow = height value at level
* below for each gridpoint

"set z 2 "zsize
"zabove=0.5*maskout("zgrid","zgrid"-"zlev")+0.5*maskout("zgrid","zlev"-"zgrid"(z-1))"
"set z 1 "zsize-1
"zbelow=0.5*maskout("zgrid","zgrid"(z+1)-"zlev")+0.5*maskout("zgrid","zlev"-"zgrid")"

* Isolate field values at bounding height levels
* fabove = requested field value above height surface
* fbelow = requested field value below height surface

"set z 2 "zsize
"fabove=zabove*0+"field
"set z 1 "zsize-1
"fbelow=zbelow*0+"field

* Turn this 3-D grid of values (mostly undefined) into a 2-D height layer
* mean is used here below for simplicity, since mean ignores undefined
* values.

"set z 1"
"zabove=mean(zabove,z=2,z="zsize")"
"fabove=mean(fabove,z=2,z="zsize")"
"zbelow=mean(zbelow,z=1,z="zsize-1")"
"fbelow=mean(fbelow,z=1,z="zsize-1")"

* Finally, interpolate linearly in height and create surface.

"set z "zmin " " zmax

"slope=(fabove-fbelow)/(zabove-zbelow)"
"b=fbelow-slope*zbelow"
"interp=slope*"zlev"+b"

* variable interp now holds height field and its named it returned
* for use by the user.

say "Done.  Newly defined variable interp has "zlev" "field"-field."

Return(interp)
