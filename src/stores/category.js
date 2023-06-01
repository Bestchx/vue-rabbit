import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCounterStore = defineStore('cocategory', () => {
  // 导航列表的数据管理
  // state 导航列表数据
  const categoryList = ref([])
  // action获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result.data
  }
  return {
    categoryList,
    getCategory
  }
})