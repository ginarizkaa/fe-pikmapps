<style>
.chartjs-render-monitor{
  background-color: #f8f8f8;
}
body {
    font-family: 'NeutraText';
}
</style>
<script>
import { Line } from "vue-chartjs";

export default {
    extends: Line,
    props:{
        title:'',
        labels:{
            type: Array,
            required: true
        },
        datasets: {
            type: Array,
            required: true
        },
    },
    mounted() {
        let self = this;
        this.renderChart(
            {
                labels: self.labels,
                datasets: self.datasets
            },
            {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: self.title
                }
            }
        );
    }
};
</script>