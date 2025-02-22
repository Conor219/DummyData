const apellidos = [
    "ÁLVAREZ", "ACOSTA", "AGUILAR", "AGUIRRE", "ALARCÓN", "ALVARADO", "ANDRADE", "ARAGÓN", "ARIAS", "ARTEAGA",
    "ARRIAGA", "AYALA", "BALBOA", "BALLESTEROS", "BÁRCENAS", "BARRAGÁN", "BARRERA", "BARRIOS", "BAUTISTA", "BELTRÁN",
    "BENAVIDES", "BENÍTEZ", "BERMÚDEZ", "BERRÍOS", "BLANCO", "BONILLA", "BORJA", "BRAVO", "BUSTAMANTE", "BUSTOS",
    "CABALLERO", "CABRERA", "CALDERÓN", "CAMACHO", "CAMPOS", "CÁRDENAS", "CARDOZO", "CARMONA", "CARRANZA", "CARRASCO",
    "CARREÑO", "CARRILLO", "CASTILLO", "CASTRO", "CEBALLOS", "CEDEÑO", "CENTENO", "CEPEDA", "CERDA", "CERVANTES",
    "CHACÓN", "CHÁVEZ", "CISNEROS", "COBOS", "CONTRERAS", "CORNEJO", "CORONADO", "CORREA", "CORDERO", "CÓRDOBA",
    "CORTÉS", "CRUZ", "CUELLAR", "CURIEL", "DE LA CRUZ", "DE LA FUENTE", "DE LA TORRE", "DEL RÍO", "DEL VALLE", "DÍAZ",
    "DOMÍNGUEZ", "DUARTE", "DUEÑAS", "DURAN", "ESCALANTE", "ESCOBAR", "ESCOBEDO", "ESPAÑA", "ESPEJO", "ESPINOSA",
    "ESTÉVEZ", "ESTRADA", "FAJARDO", "FARFÁN", "FIGUEROA", "FLETES", "FLORES", "FONSECA", "FRAGA", "FRANCO", "FUENTES",
    "FUNES", "GAITÁN", "GALINDO", "GALLARDO", "GALVÁN", "GAMBOA", "GARAY", "GARCÍA", "GARNICA", "GARZA", "GASTÉLUM",
    "GAYTÁN", "GIL", "GIRÓN", "GODÍNEZ", "GODOY", "GÓMEZ", "GONZAGA", "GONZÁLEZ", "GRIJALVA", "GUEVARA", "GUILLÉN",
    "GUTIÉRREZ", "GUZMÁN", "HERRERA", "HIDALGO", "HUERTA", "HURTADO", "IBARRA", "IGLESIAS", "INFANTE", "IZAGUIRRE",
    "JÁUREGUI", "JIMÉNEZ", "JIRÓN", "JUÁREZ", "LANDA", "LARA", "LARIOS", "LEÓN", "LLAMAS", "LOBO", "LOMELÍ", "LONGORIA",
    "LÓPEZ", "LUJÁN", "MACÍAS", "MADRID", "MALDONADO", "MANRÍQUEZ", "MÁRQUEZ", "MARROQUÍN", "MARTÍNEZ", "MATA",
    "MATÍAS", "MEDINA", "MEJÍA", "MELÉNDEZ", "MENDOZA", "MENESES", "MERCADO", "MERINO", "MEZA", "MIRANDA", "MOLINA",
    "MONCADA", "MONDRAGÓN", "MONROY", "MONTES", "MONTOYA", "MORA", "MORALES", "MORENO", "MOYA", "MUÑIZ", "MUÑOZ",
    "NAVA", "NAVARRO", "NERI", "NIETO", "NÚÑEZ", "OCAMPO", "OCHOA", "OLIVARES", "OLVERA", "ONTIVEROS", "ORDÓÑEZ",
    "OROZCO", "ORTEGA", "ORTIZ", "PACHECO", "PADILLA", "PALMA", "PALOMO", "PANTOJA", "PAREDES", "PARRA", "PASCUAL",
    "PEÑALOZA", "PERALES", "PERALTA", "PINEDA", "QUEZADA", "RAMÍREZ", "RAMOS", "RANGEL", "REYES", "ROCHA", "ZÚÑIGA", "ABARA", "ABIOYE", "ADAMA", "ADENIRAN", "AFOLABI", "AGBOOLA", "AGU", "AHMADU", "AIYEDUN", "AKANBI",
    "AKINSOLA", "AKINYEMI", "ALABI", "ALEMU", "AMADI", "AMARA", "AMIN", "ANDRE", "ANSAH", "APEDE",
    "APPIAH", "ARAFA", "ARTHUR", "ASARE", "ASOMOAH", "ATTAH", "ATTIAH", "AYODELE", "BA", "BABA",
    "BAKARE", "BALOGUN", "BAMIDELE", "BANJO", "BANSHEE", "BASSO", "BAYO", "BELL", "BELLO", "BENJAMIN",
    "BERRI", "BESSE", "BIKORO", "BILLAY", "BODJONA", "BOISSIER", "BOKA", "BOLAJI", "BOUMA", "BOYE",
    "BRANDON", "BRUCE", "BULI", "CAMARA", "CAMPBELL", "CISSOKHO", "DABO", "DANJUMA", "DARO", "DIA",
    "DIALLO", "DICKSON", "DIOMANDE", "DIRO", "DOUMBOUYA", "DUBOIS", "DUNCAN", "EDO", "EFUA", "EKANEM",
    "EKE", "EKPO", "ELEKON", "EMMANUEL", "ENOH", "ESSE", "EYANGO", "FABIAN", "FAMORO", "FAROUK",
    "FAYE", "FELIX", "FONTAINE", "FONTEH", "FOURCHE", "FRANK", "FRED", "FREEMAN", "FREMPOONG", "GADAMBA",
    "GAO", "GAYE", "GOMIS", "GUEYE", "HASSAN", "HOULE", "IBRAHIM", "IBRAHIMOVIC", "IDRIS", "IDRISSA",
    "JALLOH", "JAMES", "KAMARA", "KANTE", "KARIM", "KEITA", "KEMO", "KONE", "KOUAME", "KOUASSI",
    "KOUROUMA", "KUMA", "KUMBA", "KUMAR", "LAKOU", "LAMINE", "LANO", "LAVOISIER", "LEBLANC", "LEFLOCH",
    "LEGA", "LO", "LOUM", "MAHMOUD", "MAIGA", "MAHMOUDI", "MALAYO", "MAMADOU", "MANGARA", "MAPOUKA",
    "MARI", "MARSHALL", "MASSA", "MASSAOU", "MAYO", "MBA", "MBAH", "MBO", "MBOMBO", "MBUTI",
    "MEITE", "MENDY", "MERGA", "MOUSSA", "MOUHAMED", "MUBARAK", "MULENGA", "NAHOM", "NAMOR", "NDEYE",
    "NEBI", "NIAKATE", "NIAKORA", "NIANG", "NIAKATE", "NIMROD", "NKRUMAH", "OBASI", "OCHOU", "ODON",
    "ODUM", "OJE", "OJOMOYELA", "OKAFOR", "OKON", "OLA", "OLAGUNJU", "OLAWALE", "OLAWUMI", "OLOWE",
    "OMAR", "OMORO", "OQUENDO", "OSMAN", "OWO", "PATAKI", "PATERSON", "POGO", "RAJI", "RAMLAH",
    "RAYMOND", "SAMEH", "SAMBA", "SANE", "SASSOU", "SENEGAL", "SIDI", "SIDIKE", "SISSOKHO", "SOMAE",
    "SOUMAH", "TAIWO", "TAKOUKOU", "TALIBA", "TAYLOR", "THOMAS", "TIEBILE", "TOMMY", "TOURE", "TRAORE",
    "TUNDE", "WADE", "WANG", "YAO", "YEMO", "YERO", "YOUMBI", "YUSUF", "ZAID", "ZAMBO", "BAEK", "BANG", "BYUN", "CHOI", "CHUN", "CHO", "CHEON", "CHUNG", "GO", "GON",
    "HA", "HAN", "HEO", "HO", "HONG", "HWANG", "JANG", "JEONG", "JIN", "JO",
    "KANG", "KIM", "KO", "KONG", "KWON", "LEE", "LIM", "MIN", "MOON", "NA",
    "OH", "PARK", "SEO", "SEOK", "SHEE", "SHIN", "SONG", "SUNG", "TAK", "WOO",
    "YANG", "YOO", "YUN", "LEE", "LIM", "JEON", "KIM", "RHEE", "LEE", "KO",
    "YI", "JU", "KWON", "CHOI", "JUNG", "YOUNG", "NAM", "DO", "HYO", "RHEE",
    "CHA", "YOON", "BANG", "LEE", "PARK", "KIM", "CHOO", "CHOI", "YOO", "SUNG",
    "SO", "LEE", "KIM", "CHUN", "KIM", "JUNG", "HONG", "JANG", "SEO", "WOO",
    "YOON", "JUN", "CHAE", "SON", "HONG", "YOO", "AHN", "YUN", "SEO", "LEE",
    "CHO", "HWANG", "KIM", "KIM", "SEO", "MOON", "KIM", "AHN", "KIM", "PARK"
    ];

    console.log(apellidos.length);

    const nombres = [
        "AALIYAH", "ABDI", "ABENI", "ABIGAIL", "ABNER", "ADAMA", "ADELA", "ADEM", "ADINA", "ADITYA", "ADRIAN", "AEDAN", "AHMAD", "AHMED", "AIDAN", "AISHA", "AKIRA", "ALANA", "ALFRED", "ALI", "ALINA", "AMARA", "AMIR", "ANANYA", "ANDERSON", "ANDRE", "ANGELA", "ANITA", "ANNA", "ANTONIO", "ARIANA", "ARACELI", "ARIANNA", "ASHER", "ASHLEY", "ASMA", "ASTRID", "ATHENA", "ATLAS", "AUBREY", "AUDREY", "AUGUST", "AVA", "AXEL", "AYANA", "BABATUNDE", "BALTHAZAR", "BEATRICE", "BENJAMIN", "BENOIT", "BIANCA", "BILLIE", "BLANCA", "BODHI", "BRANDON", "BRIANA", "BRITTANY", "BRODY", "BRUCE", "BRYCE", "CAIO", "CAIUS", "CAMILA", "CARLOS", "CARMEN", "CAROLINA", "CARTER", "CATHERINE", "CHAD", "CHARLIE", "CHARLOTTE", "CHLOE", "CHRISTINA", "CHRISTOPHER", "CIELO", "CLEO", "CLARA", "CLARKE", "CLAUDE", "CLEMENT", "CLEO", "COLETTE", "CONOR", "CRISTINA", "DALIA", "DAMON", "DANIEL", "DANTE", "DARIA", "DAVID", "DAWN", "DEAN", "DEJA", "DEMETRIUS", "DIANA", "DIEGO", "DIMITRI", "DION", "DIANA", "DYLAN", "EDEN", "EDUARDO", "ELAINE", "ELEANOR", "ELENA", "ELI", "ELIJAH", "ELISE", "ELLIOT", "ELSA", "EMILIA", "EMILIO", "EMILY", "EMMA", "ENZO", "ERIK", "ESME", "ETHAN", "EVA", "EVELYN", "EZRA", "FABIO", "FAITH", "FARIDA", "FELIPE", "FELICITY", "FERNANDO", "FINN", "FLAVIA", "FRANCESCA", "FRANCIS", "FREDDIE", "GABRIELA", "GABRIEL", "GAEL", "GAGE", "GALA", "GARETH", "GARRETT", "GAVIN", "GIANNA", "GIOVANNI", "GRACE", "GRAHAM", "GRETA", "GUSTAVO", "HANNAH", "HASSAN", "HAYLEY", "HECTOR", "HOLLY", "HOPE", "HUNTER", "IBRAHIM", "IDRIS", "IMANI", "INDIRA", "INGRID", "ISAAC", "ISABELLA", "ISABELLE", "ISHMAEL", "ISMAIL", "IVAN", "JACE", "JACK", "JACKSON", "JACOB", "JADE", "JAIME", "JAKE", "JAMES", "JANELLE", "JASMINE", "JASON", "JAVIER", "JAY", "JAYDEN", "JENNA", "JESSE", "JESSICA", "JESUS", "JOAN", "JOAQUIN", "JOHN", "JOHNNY", "JONAH", "JORDAN", "JOSE", "JOSEPH", "JOSIE", "JOVANY", "JUDE", "JULIA", "JULIAN", "KAITLYN", "KALI", "KALEB", "KAREN", "KARI", "KARLA", "KARINA", "KATHERINE", "KATIE", "KAYLA", "KEITH", "KELLY", "KENJI", "KENSHIN", "KEVIN", "KIERA", "KIERAN", "KILEY", "KIMBERLY", "KINGSTON", "KIRA", "KOBE", "KOURTNEY", "KRIS", "KRISTEN", "KRISTIN", "KYLIE", "LAILA", "LANA", "LARA", "LAURA", "LEAH", "LEO", "LEONARDO", "LIAM", "LILIA", "LILLIAN", "LILLY", "LINA", "LIVIA", "LOGAN", "LOLA", "LOUIS", "LUCIA", "LUCAS", "LUISA", "LUNA", "LUZ", "MADDox", "MADELINE", "MADELYN", "MAEVE", "MAGNUS", "MALIK", "MANUEL", "MARC", "MARCO", "MARGARET", "MARIA", "MARIAH", "MARIAM", "MARIANA", "MARIO", "MARTHA", "MARTIN", "MASON", "MATEO", "MATTHEW", "MAUREEN", "MAX", "MAXIMUS", "MAYA", "MEGAN", "MELANIE", "MICHAELA", "MICHAEL", "MICHELLE", "MILAN", "MILES", "MINA", "MIRA", "MIRANDA", "MIRIAM", "MITCHELL", "MIYA", "MOHAMED", "MOLLY", "MONICA", "NADIA", "NADINE", "NAOMI", "NATALIA", "NATHAN", "NATHALIE", "NICHOLAS", "NICOLE", "NOAH", "NOELLE", "NOLAN", "OLIVIA", "OMAR", "OSCAR", "OWEN", "PAIGE", "PARKER", "PATRICK", "PAUL", "PAULA", "PEDRO", "PENELOPE", "PERRY", "PETER", "PHOENIX", "PIPER", "PRISCILLA", "RAFAEL", "RAINE", "RALPH", "RAQUEL", "RAVEN", "REAGAN", "REED", "REMY", "RILEY", "ROBERTA", "ROBERT", "ROCHELLE", "ROMAN", "RONALD", "ROSA", "ROSE", "RUTH", "RYAN", "SABRINA", "SADIE", "SAMANTHA", "SAMUEL", "SANDY", "SARA", "SARAH", "SAWYER", "SEBASTIAN", "SELENA", "SETH", "SHANE", "SHANNON", "SHARI", "SHARON", "SHAUN", "SHEA", "SHEILA", "SIENNA", "SILAS", "SIMON", "SOPHIA", "SPENCER", "STELLA", "STEPHEN", "STEVE", "STEVEN", "STEWART", "STUART", "SUMMER", "SYDNEY", "TALIA", "TANNER", "TARA", "TAYLOR", "TEAGAN", "THOMAS", "TIFFANY", "TIMOTHY", "TINA", "TOBIAS", "TRAVIS", "TRENT", "TREY", "TRISTAN", "TYLER", "VANESSA", "VERA", "VICTOR", "VIOLET", "VINCENT", "WADE", "WALTER", "WANDA", "WAYNE", "WILL", "WILLIAM", "WILLOW", "WINSTON", "XANDER", "XIMENA", "YASMINE", "YASMIN", "ZACHARY", "ZANE", "ZARA", "ZOE", "ZURI", "ABEL", "AGNES", "ALEXIS", "ANDREA", "ANGEL", "ANNABELLE", "ARCHER", "ARIEL", "AUSTIN", "BEAU", "BELLE", "BLAKE", "BOWEN", "BRADEN", "BRAYDEN", "BREE", "BRENDAN", "BROOKE", "CADDY", "CANDICE", "CARLO", "CHARISSE", "CHLOE", "CLINT", "CONSTANCE", "CRAIG", "DALLAS", "DAMON", "DAPHNE", "DAREN", "DARIUS", "DARNELL", "DEANNA", "DEIRDRE", "DELIA", "DEWAYNE", "DORA", "DWAYNE", "EDWIN", "EMMETT", "ESTELLE", "ETTA", "EVERETT", "FRANK", "GALE", "GARRET", "GERRY", "GLORIA", "GRANT", "GUILLERMO", "HERMAN", "HOLLY", "IRENE", "ISAIAH", "JANICE", "JASON", "JAVIER", "JEREMY", "JESSE", "JIMMY", "JONATHAN", "JOSE", "JUDY", "JUSTIN", "KARA", "KENDALL", "LAURA", "LEE", "LOREN", "LUKE", "MALCOLM", "MARGARET", "MARIAN", "MARK", "MAYRA", "MICHAEL", "MILES", "NATALIE", "NEIL", "NORMAN", "OLIVER", "PAMELA", "PATRICK", "PETER", "PHILLIP", "REBECCA", "RICHARD", "SAMUEL", "SARAH", "SANDRA", "SAVANNAH", "SETH", "SHANE", "SHELBY", "STEVE", "TARA", "TOMMY", "TONY", "TRAVIS", "TROY", "VIVIAN", "WENDY", "ALLISON", "ZOE"
    ];

    console.log(nombres.length);

    function generarFechaMysql() {
// Definir el rango de fechas (puedes modificarlo según tus necesidades)
const inicio = new Date(2000, 0, 1); // 1 de enero de 2000
const fin = new Date(2025, 11, 31);  // 31 de diciembre de 2025

// Calcular la diferencia entre las fechas en milisegundos
const diferencia = fin - inicio;

// Generar un número aleatorio de milisegundos dentro del rango
const diasAleatorios = Math.floor(Math.random() * diferencia);

// Sumar los días aleatorios a la fecha de inicio
const fechaAleatoria = new Date(inicio.getTime() + diasAleatorios);

// Convertir la fecha en formato MySQL (YYYY-MM-DD)
const fechaMysql = fechaAleatoria.toISOString().split('T')[0];
return fechaMysql;
}

    function generar() {
        var numeros = document.getElementById("numeros").value;
        var salida = "DELETE FROM alumnos; INSERT INTO alumnos (matricula, apellido_1, apellido_2, nombres, correo, fecha_nacimiento) VALUES ", 
        matricula = 2311120000;
        
        for (let i = 0; i < numeros; i++) {
            var apellido = apellidos[Math.floor(Math.random()*510)];
            var nombre = nombres[Math.floor(Math.random()*500)];
            salida += `('${matricula + i}', 
            '${apellido}', 
            '${apellidos[Math.floor(Math.random()*510)]}', 
            '${nombre}
            ${nombres[Math.floor(Math.random()*500)]}', 
            '${nombre}_${apellido}@unikino.edu.mx', '${generarFechaMysql()}'),<br>`;
        }

        salida = salida.substring(0,salida.length-5)+";";

        document.getElementById("salida").innerHTML = salida;
    }
