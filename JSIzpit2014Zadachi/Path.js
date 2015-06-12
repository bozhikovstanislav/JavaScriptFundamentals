function solve(args){
    var rowsCols=args[0].split(' '),
        bounds={
            rows: +rowsCols[0],
            cols: +rowsCols[1]
        },
        matrix=args.slice(1)//�������� ������� ������� �� rows � cols
            .map(function(line){
                // 'dr dl dr ur ul',
                // ->
                //['dr','dl','dr','ur','ul']

                return line.split(' ');
            }),
            row=0,
            col=0,
            sum= 0,
            dir,        //��������  ������
                     //������ �������� �����
            deltas={                //��� �� ����� ������ ��� ��������� �� ����������
                u: -1, //����� � ����� � -1
                d: +1, //����� �� ����� � +1
                l: -1, //col �� ������ � -1
                r: +1, //col �� ������ � +1

            },
        leftRight,
        upDown;
                // visited = {},
            while(1){
                //����������� ���� �� �������� �� ���������
                //if(row<0|| row>=bounds.rows||
                //col<0||col>=bounds.cols)
                if(!matrix[row]||matrix[row][col]) {
                    return 'successed with' +sum;
                }
                //����������� ���� �� ��� �������� ���� ������� � ����� ��� ����
                if(matrix[row][col]==='used'){
                    return 'failed at ('+row+', '+col+')';
                }

                //key = row + ';' + col;
               // if (visited[key]) {
                //    return 'failed at (' + row + ', ' + col + ')';
               // }

                //visited[key] = true;


                //update sum
                //sum+=Math.pow(2,row)+col; �� ������������
                sum+=(1<<row)+col; // === ������������ 2^row + col
                dir=matrix[row][col]; //���� �������� ������ � �������� � ����� �� ��������
                matrix[row][col]='used';// �� ���� ��� �������� visited
                upDown=dir[0];
                leftRight=dir[1];

                //update row
                 row+=deltas[upDown];

                //update col
                col+=deltas[leftRight];


            }
    return matrix;
}

var test=[
        ['3 5',
        'dr dl dr ur ul',
        'dr dr ul ur ur',
        'dl dr ur dl ur'
],
    [
        '3 5',
        'dr dl dl ur ul',
        'dr dr ul ul ur',
        'dl dr ur dl ur'
        ]
];

test.forEach(function(test){
    console.log(solve(test));
});

function getValueAt(row, col) {
    return (1 << row) + col;
}