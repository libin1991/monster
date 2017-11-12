'use strict'

import Vue from 'vue'
import Component from 'vue-class-component'

import SkeletonLoading from 'components/skeleton/Loading'
import * as Template from './Index.html'


@Template
@Component({
  components: {
    SkeletonLoading
  }
})
export default class CMSIndex extends Vue {
  chartData = {
    columns: ['日期', '成本', '利润', '占比', '其他'],
    rows: [
      { '成本': 1523, '日期': '1月1日', '利润': 1523, '占比': 0.12, '其他': 100 },
      { '成本': 1223, '日期': '1月2日', '利润': 1523, '占比': 0.345, '其他': 100 },
      { '成本': 2123, '日期': '1月3日', '利润': 1523, '占比': 0.7, '其他': 100 },
      { '成本': 4123, '日期': '1月4日', '利润': 1523, '占比': 0.31, '其他': 100 },
      { '成本': 3123, '日期': '1月5日', '利润': 1523, '占比': 0.12, '其他': 100 },
      { '成本': 7123, '日期': '1月6日', '利润': 1523, '占比': 0.65, '其他': 100 }
    ]
  }

  chartSettings = {
    metrics: ['成本', '利润'],
    dimension: ['日期']
  }
}
