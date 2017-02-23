    // создаем объект Периодической Таблицы и задаем размер клетки элемента

    var pt = new ChemDoodle.PeriodicTableCanvas('pt', 40);
    //pt.specs.backgroundColor = 'rgba(158, 167, 184, 0.2)';
    //ctx.setLineDash([4, 3]);

    var arr1 = [1, 3, 11, 19, 37, 55, 87];
    var arr2 = [4, 12, 20, 38, 56, 88];
    var arr3 = [21, 39, 57, 89];
    var arr4 = [22, 40, 72, 104];
    var arr5 = [23, 41, 73, 105];
    var arr6 = [24, 42, 74, 106];
    var arr7 = [25, 43, 75, 107];
    var arr8 = [26, 44, 76, 108];
    var arr9 = [27, 45, 77, 109];
    var arr10 = [28, 46, 78, 110];
    var arr11 = [29, 47, 79, 111];
    var arr12 = [30, 48, 80, 112];
    var arr13 = [5, 13, 31, 49, 81, 113];
    var arr14 = [6, 14, 32, 50, 82];
    var arr15 = [7, 15, 33, 51, 83];
    var arr16 = [8, 16, 34, 52, 84];
    var arr17 = [9, 17, 35, 53, 85];
    var arr18 = [2, 10, 18, 36, 54, 86];
    var arrLa = [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71];
    var arrAc = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103];
    var arrNonMe = [1, 2, 6, 7, 8, 9, 10, 15, 16, 17, 18, 34, 35, 36, 53, 54, 85, 86];
    var arrMeta = [5, 14, 32, 33, 51, 52];

    var arrS = arr1.concat(arr2, 2);
    var arrP = arr13.concat(arr14, arr15, arr16, arr17, arr18);
    var arrD = arr3.concat(arr4, arr5, arr6, arr7, arr8, arr9, arr10, arr11, arr12);
    var arrF = arrLa.concat(arrAc);

    var arrAll = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10, arr11, arr12, arr13, arr14, arr15, arr16, arr17, arr18];

    // задаем параметры отображения таблицы
    All(); // рисуем таблицу


    // поиск в массиве
    function find(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) return i;
        } return -1;
    }

    // Заполнение пустого места
    function Info(ctx, e, cell, col1, col2){
        ctx.fillStyle = col2; // заполняем верхнюю строчку
        ctx.fillRect(90, 5, 390, 35);

        ctx.fillStyle = '#d3d3d3'; // заполняем нижнюю строчку
        ctx.fillRect(90, 45, 390, 75);

        ctx.fillStyle = col1; // заполняем под элементом
        ctx.fillRect(90, 45, 105, 75);

        //ctx.strokeRect(85, 5, 400, 120); // создаем прямоугольник с инормацией о элементе

        // общие настройки текста информации
        ctx.fillStyle = 'black';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';

        ctx.font = '600 18px sans-serif'; // первая строчка информации
        ctx.fillText(e.name, 100, 25);
        ctx.textAlign = 'right';
        ctx.fillText(e.atomicNumber, 470, 25);

        ctx.textAlign = 'left';
        ctx.font = '800 28px sans-serif'; // символ элемента
        ctx.fillText(e.symbol, 120, 85);

        ctx.font = '600 12px sans-serif'; // детальная информация элемента
        ctx.fillText('Atomic Number:                 '+e.atomicNumber, 220, 58);
        ctx.fillText('Mass:                                    '+e.mass+' a.e.m.', 220, 75);
        ctx.fillText('Covalent Radius:               '+e.covalentRadius+' \u212B', 220, 92);
        ctx.fillText('vdW Radius:                        '+e.vdWRadius+' \u212B', 220, 109);
    }

    // При вызове окрашивает группы
    function getGroup(groupNo){
        pt.drawCell = function(ctx, specs, cell){
            draw(ctx, specs, cell);
            var arr = arrAll[groupNo-1];
            var i = cell.element.atomicNumber;
            if (find(arr, i) == -1){
                setGroupColor(ctx, cell, '#dee0de', '#dee0de');
                setText(ctx, cell, '#7f7f7f', '#7f7f7f');
            }
        }
    }

    // При вызове окрашивает периоды
    function getPeriod(pNo){
        pt.drawCell = function(ctx, specs, cell){
            draw(ctx, specs, cell);
            var i = cell.element.atomicNumber;
            if (pNo==1) {
                if (i>2) {
                    setGroupColor(ctx, cell, '#dee0de', '#dee0de');
                    setText(ctx, cell, '#7f7f7f', '#7f7f7f');
                }
            }
            else if (pNo==2) {
                if (i<3 || i>10) {
                    setGroupColor(ctx, cell, '#dee0de', '#dee0de');
                    setText(ctx, cell, '#7f7f7f', '#7f7f7f');
                }
            }
            else if (pNo==3) {
                if (i<11 || i>18) {
                    setGroupColor(ctx, cell, '#dee0de', '#dee0de');
                    setText(ctx, cell, '#7f7f7f', '#7f7f7f');
                }
            }
            else if (pNo==4) {
                if (i<19 || i>36) {
                    setGroupColor(ctx, cell, '#dee0de', '#dee0de');
                    setText(ctx, cell, '#7f7f7f', '#7f7f7f');
                }
            }
            else if (pNo==5) {
                if (i<37 || i>54) {
                    setGroupColor(ctx, cell, '#dee0de', '#dee0de');
                    setText(ctx, cell, '#7f7f7f', '#7f7f7f');
                }
            }
            else if (pNo==6) {
                if (i<55 || i>86) {
                    setGroupColor(ctx, cell, '#dee0de', '#dee0de');
                    setText(ctx, cell, '#7f7f7f', '#7f7f7f');
                }
            }
            else if (pNo==7) {
                if (i<87 || i>120) {
                    setGroupColor(ctx, cell, '#dee0de', '#dee0de');
                    setText(ctx, cell, '#7f7f7f', '#7f7f7f');
                }
            }
        }
    }


    // При вызове окрашивает блоки
    function getBlock(blockName){
        pt.drawCell = function(ctx, specs, cell){
            draw(ctx, specs, cell);
            switch (blockName) {
                case 's':
                    var arr = arrS;
                    break;
                case 'p':
                    var arr = arrP;
                    break;
                case 'd':
                    var arr = arrD;
                    break;
                case 'f':
                    var arr = arrF;
                    break;
                case 'la':
                    var arr = arrLa;
                    break;
                case 'ac':
                    var arr = arrAc;
                    break;
                default:
                    break;
            }
            var i = cell.element.atomicNumber;
            if (find(arr, i) == -1){
                setGroupColor(ctx, cell, '#dee0de', '#dee0de');
                setText(ctx, cell, '#7f7f7f', '#7f7f7f');
            }
        }
    }

    // Информация о металлоидах (легенда)
    function InfoMetalloid(ctx){
        ctx.lineWidth = 0;
        ctx.strokeStyle='white'; // цвет решетки
        ctx.strokeRect(485, 5, 200, 40);
        ctx.fillStyle='#787e91';
        ctx.fillRect(495, 15, 20, 20);
        ctx.fillStyle='black';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.font = '18px sans-serif';
        ctx.fillText(' - Metalloid element', 515, 25);
    }

    // При вызове окрашивает неметаллы
    function nonMetal(){
        pt.drawCell = function(ctx, specs, cell){
            draw(ctx, specs, cell);
            var i = cell.element.atomicNumber;
            var arr = arrNonMe;
            if (i==1) { InfoMetalloid(ctx); } // рисует легенду
            if (find(arr, i) == -1){
                setGroupColor(ctx, cell, '#dee0de', '#dee0de');
                setText(ctx, cell, '#7f7f7f', '#7f7f7f');
            }
            var arr = arrMeta;
            if (find(arr, i) != -1) {
                setGroupColor(ctx, cell, '#787e91', '#787e91'); // #333660
                setText(ctx, cell, 'black', 'white');
            }
        }
    }

    // При вызове окрашивает металлы
    function Metal(){
        pt.drawCell = function(ctx, specs, cell){
            draw(ctx, specs, cell);
            var i = cell.element.atomicNumber;
            var arr = arrNonMe;
            if (i==1) { InfoMetalloid(ctx); } // рисует легенду
            if (find(arr, i) != -1){
                setGroupColor(ctx, cell, '#dee0de', '#dee0de');
                setText(ctx, cell, '#7f7f7f', '#7f7f7f');
            }
            var arr = arrMeta;
            if (find(arr, i) != -1) {
                setGroupColor(ctx, cell, '#787e91', '#787e91'); // #333660
                setText(ctx, cell, 'black', 'white');
            }
        }
    }

     function setGroupColor(ctx, cell, col1, col2) {
        ctx.fillStyle = col1;
        ctx.fillRect(cell.x, cell.y, cell.dimension, 3*cell.dimension/5);
        ctx.fillStyle = col2;
        ctx.fillRect(cell.x, cell.y+3*cell.dimension/5, cell.dimension, 2*cell.dimension/5);
     }

     function setText(ctx, cell, col1, col2) {
        ctx.font = '600 16px sans-serif';
        ctx.fillStyle = col1; // цвет букв #404040
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(cell.element.symbol, cell.x+20, cell.y+12);

        ctx.fillStyle = col2; // нижняя строчка
        ctx.font = '11px sans-serif';
        ctx.fillText(cell.element.atomicNumber, cell.x+20, cell.y+32);
     }

    // функция дли рисования дефолтных клеток таблицы
    function draw(ctx, specs, cell) {
    var i = cell.element.atomicNumber;
        // для водорода
        if (i==1) { setGroupColor(ctx, cell, '#aec8f2', '#6a7991'); }
        // для актинидов
        else if (find(arrAc, i) != -1) { setGroupColor(ctx, cell, '#7cff9f', '#00a82c'); }
        // для лантанидов
        else if (find(arrLa, i) != -1) { setGroupColor(ctx, cell, '#a7f9e5', '#00a87e'); }
        // для 1 группы
        else if (find(arr1, i) != -1) { setGroupColor(ctx, cell, '#ea8fcd', '#b74091'); }
        // для 2 группы
        else if (find(arr2, i) != -1) { setGroupColor(ctx, cell, '#ffaacd', '#a32f5f'); }
        // для d группы
        else if (find(arr3, i) != -1 || find(arr4, i) != -1 || find(arr5, i) != -1 || find(arr6, i) != -1 ||
            find(arr7, i) != -1 || find(arr8, i) != -1 || find(arr9, i) != -1 || find(arr10, i) != -1 ||
            find(arr11, i) != -1 || find(arr12, i) != -1){
            setGroupColor(ctx, cell, '#83c4e2', '#1d7fad'); }
        // для 13 группы
        else if (find(arr13, i) != -1) { setGroupColor(ctx, cell, '#62efb7', '#1dad6c'); }
        // для 14 группы
        else if (find(arr14, i) != -1) { setGroupColor(ctx, cell, '#67e073', '#1a9926'); }
        // для 15 группы
        else if (find(arr15, i) != -1) { setGroupColor(ctx, cell, '#83cc55', '#4a991a'); }
        // для 16 группы
        else if (find(arr16, i) != -1) { setGroupColor(ctx, cell, '#edf968', '#818c0c'); }
        // для 17 группы
        else if (find(arr17, i) != -1) { setGroupColor(ctx, cell, '#e8a655', '#8c520c'); }
        // для 18 группы
        else if (find(arr18, i) != -1) { setGroupColor(ctx, cell, '#f9ef20', '#7a7400'); }
        if (pt.hovered==cell) {
            setGroupColor(ctx, cell, '#ff4444', '#8c0000');
            var e = pt.getHoveredElement();
            Info(ctx, e, cell, '#b5b8bc', '#9ea2a8');
        }
        ctx.lineWidth = 2;
        ctx.strokeStyle='white'; // цвет решетки
        ctx.strokeRect(cell.x, cell.y, cell.dimension, cell.dimension);

        setText(ctx, cell, 'black', 'white');
    }



    // рисуем всю таблицу с заданными параметрами отображения
    function All(){
        pt.drawCell = function(ctx, specs, cell){
            // рисуем таблицу
            draw(ctx, specs, cell);
        }
    }
    pt.repaint();

    // функция для сохранения истории
    function Clear(){
        var h =  document.getElementById('h');
        var hOld = h.innerHTML;
        var hNew   = "";
        h.innerHTML = hNew;
	}

	pt.click = function(evt){
        if(this.hovered!=null){
            var e = this.getHoveredElement();
            var h =  document.getElementById('h');
            var hOld = h.innerHTML;
            var newData1  = "<font family='sans-serif' size='+1'>"+e.name+'\n'+"<br>"+"</font>";
            var newData2  = "<font family='sans-serif' size='+1'>"+e.symbol+'\n'+"<br>"+"</font>";
            var newData6  = "<font family='sans-serif' size='+1'>"+'Mass: '+e.mass+'\n'+"<br>"+"</font>";
            var newData3  = "<font family='sans-serif' size='+1'>"+'Atomic Number: '+e.atomicNumber+'\n'+"<br>"+"</font>";
            var newData4  = "<font family='sans-serif' size='+1'>"+'Covalent Radius: '+e.covalentRadius+'\u212B\n'+"<br>"+"</font>";
            var newData5  = "<font family='sans-serif' size='+1'>"+'vdW Radius: '+e.vdWRadius+'\u212B\n'+"<br>"+"<br>"+"</font>";
            var hNew   = newData2 + newData1 + newData3 + newData6 + newData4 + newData5 + hOld;
            h.innerHTML = hNew;
        }
    }



