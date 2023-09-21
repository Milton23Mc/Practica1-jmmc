// class SimpleGraph {
//     drawBarChart(data: number[]) {
//         console.log("Drawing bar chart:", data);
//         // Lógica para dibujar gráficos de barra
//     }

//     // Se agregaron con el tiempo
//     drawPieChart(data: number[]) {
//         console.log("Drawing pie chart:", data);
//         // Lógica adaptada para dibujar gráficos de pastel
//     }

//     drawRadialChart(data: number[]) {
//         console.log("Drawing radial chart:", data);
//         // Lógica adaptada para dibujar gráficos radiales
//     }

//     // ... otras visualizaciones adaptadas.
// }



class BarChart {
    draw(data: number[]) {
        console.log("Drawing bar chart:", data);
        // Lógica para dibujar gráficos de barra
    }
}

class PieChart {
    draw(data: number[]) {
        console.log("Drawing pie chart:", data);
        // Lógica para dibujar gráficos de pastel
    }
}

class RadialChart {
    draw(data: number[]) {
        console.log("Drawing radial chart:", data);
        // Lógica para dibujar gráficos radiales
    }
}

// Uso:

const barChart = new BarChart();
barChart.draw([1, 2, 3]);

const pieChart = new PieChart();
pieChart.draw([30, 40, 60]);

const radialChart = new RadialChart();
radialChart.draw([10, 20, 30]);
