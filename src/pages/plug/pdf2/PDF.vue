<template>
    <div class="pdf" v-show="fileType === 'pdf'">
        <p class="arrow">
            <span @click="changePdfPage(0)" class="turn" :class="{grey: currentPage==1}">Preview</span>
            {{currentPage}} / {{pageCount}}
            <span @click="changePdfPage(1)" class="turn" :class="{grey: currentPage==pageCount}">Next</span>
        </p>
        <pdf
            :src="src"
            :page="currentPage"
            @num-pages="pageCount=$event"
            @page-loaded="currentPage=$event"
            @loaded="loadPdfHandler">
        </pdf>
    </div>
</template>

<script>
    import pdf from 'vue-pdf'
    export default {
        name: "PDF",
        components: {pdf},
        data () {
            return {
                currentPage: 0,
                pageCount: 0,
                fileType: 'pdf',
                src: ''

            }
        },
        created (){
            let url = this.$route.query.url
            this.src = pdf.createLoadingTask(url)


            // this.src = pdf.createLoadingTask(this.src)
        },
        mounted () {
            let url = this.$route.query.url
            this.src = pdf.createLoadingTask(url)
        },
        methods: {
            changePdfPage (val) {
                if (val === 0 && this.currentPage > 1) {
                    this.currentPage--
                }
                if (val === 1 && this.currentPage < this.pageCount) {
                    this.currentPage++
                }
            },

            // pdf加载时
            loadPdfHandler (e) {
                this.currentPage = 1
            }

        }
    }
</script>

<style scoped>

</style>
