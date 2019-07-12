import { Injectable } from '@angular/core';

@Injectable()
export class FormatData {
    daysShortMap = new Map([
        [0, 'lun.'],
        [1, 'mar.'],
        [2, 'mie.'],
        [3, 'jue.'],
        [4, 'vie.'],
        [5, 'sab.'],
        [6, 'dom.']
    ]);

    daysStringMap = new Map([
        [0, 'Domingo'],
        [1, 'Lunes'],
        [2, 'Martes'],
        [3, 'Miércoles'],
        [4, 'Jueves'],
        [5, 'Viernes'],
        [6, 'Sábado']
    ]);

    weatherConditionMap = new Map([   
        [1000,'Despejado'],
        [1003,'Parcialmente nublado'],
        [1006,'Bastante nublado'],
        [1009,'Totalmente nublado'],
        [1030,'Niebla'],
        [1063,'Probabilidad de lluvia'],
        [1066,'Probabilidad de nieve'],
        [1069,'Probabilidad de Aguanieve'],
        [1072,'Probabilidad llovizna helada'],
        [1087,'Probabilidad de truenos espóradicos'],
        [1114,'Ventisca'],
        [1117,'Tormenta de nieve'],
        [1135,'Niebla'],
        [1147,'Niebla helada'],
        [1150,'Llovizna parcialmente ligera'],
        [1153,'Llovizna ligera'],
        [1168,'Llovizna helada'],
        [1171,'Fuerte llovizna helada'],
        [1180,'Lluvia parcialmente ligera'],
        [1183,'Lluvia ligera'],
        [1186,'Lluvia moderada a veces'],
        [1189,'Lluvia moderada'],
        [1192,'Fuertes lluvias a veces'],
        [1195,'Fuertes lluvias'],
        [1198,'Ligera lluvia helada'],
        [1201,'Lluvia helada moderada o fuerte'],
        [1204,'Aguanieve ligera'],
        [1207,'Aguanieve moderada o fuerte'],
        [1210,'Nieve parcialmente ligera'],
        [1213,'Nieve ligera'],
        [1216,'Nieve parcialmente moderada'],
        [1219,'Nieve moderada'],
        [1222,'Nevadas parcialmente fuertes'],
        [1225,'Fuertes nevadas'],
        [1237,'Granizo'],
        [1240,'Chubascos ligeros'],
        [1243,'Chubascos moderados o fuertes'],
        [1246,'Lluvia torrencial'],
        [1249,'Chubascos de aguanieve ligero'],
        [1252,'Chubascos de aguanieve moderados o fuertes'],
        [1255,'Chubascos de nieve liviana'],
        [1258,'Lluvias moderadas o fuertes'],
        [1261,'Chubascos ligeros de granizo'],
        [1264,'Chubascos moderados o fuertes con granizo'],
        [1273,'Lluvia ligera con truenos'],
        [1276,'Lluvia moderada o fuerte con trueno'],
        [1279,'Nieve parcialmente ligera con truenos'],
        [1282,'Nieve moderada o fuerte con trueno']
    ]);
    
    DaysShortName = function(day) {        
        return this.daysShortMap.get(day);
    }

    DaysString = function(day) {
        return this.daysStringMap.get(day);    
    }
    
    WeatherConditionTranslate = function(condition:number) {        
        return this.weatherConditionMap.get(condition);  
    }
 
}
