<template>
  <div class="app-container">
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="borrowAmount" label="借款额度"></el-table-column>
      <el-table-column
        prop="integralStart"
        label="积分区间开始"
      ></el-table-column>
      <el-table-column
        prop="integralEnd"
        label="积分区间结束"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link
            :to="'/core/integral-grade/edit/' + scope.row.id"
            style="margin-right: 5px"
          >
            <el-button type="primary" size="mini" icon="el-icon-edit">
              Edit
            </el-button>
          </router-link>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="remove(scope.row.id)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import integralGradeApi from '@/api/integral-grade'
import ItemVue from '@/layout/components/Sidebar/Item.vue'
export default {
  //这里data的写法需要注意,必须这么写,不然无法被入口引用
  data() {
    return {
      list: [], //积分等级列表
    }
  },
  methods: {
    fetchData() {
      integralGradeApi.list().then((resp) => {
        this.list = resp.data.list
      })
    },
    remove(id) {
      this.$confirm('此操作将删除该记录,是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          //串联then方法
          return integralGradeApi.deleteById(id)
        })
        .then((resp) => {
          this.$message({
            showClose: true,
            message: resp.message,
            type: 'success',
          })
          this.fetchData()
        })
        .catch((err) => {
          //当出现http error时,也会抛异常到这里,需要单独处理
          if (err === 'cancel') {
            this.$message({
              type: 'info',
              message: '删除成功',
            })
          }
        })
    },
  },
  created() {
    this.fetchData()
  },
  mounted() {},
}
</script>
<style scoped></style>
