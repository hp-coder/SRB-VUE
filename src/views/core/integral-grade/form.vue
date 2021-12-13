<template>
  <div class="app-container">
    <!-- 120px 是表单描述的宽度-->
    <el-form label-width="120px">
      <el-form-item label="借款额度">
        <el-input-number v-model="integralGrade.borrowAmount" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间开始">
        <el-input-number v-model="integralGrade.integralStart" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间结束">
        <el-input-number v-model="integralGrade.integralEnd" :min="0" />
      </el-form-item>
      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate()"
        >
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import integralGradeApi from '@/api/integral-grade'
import integralGrade from '@/api/integral-grade'
export default {
  data() {
    return {
      //防止重复提交
      saveBtnDisabled: false,
      //对象
      integralGrade: {},
    }
  },
  methods: {
    saveOrUpdate() {
      this.saveBtnDisabled = true
      if (integralGrade.id) {
        this.update()
      } else {
        this.save()
      }
    },
    save() {
      integralGradeApi.save(this.integralGrade).then((resp) => {
        this.$message.success(resp.message)
        this.$router.push('/core/integral-grade/list')
      })
    },
    update() {
      integralGradeApi.update(this.integralGrade).then((resp) => {
        this.$message.success(resp.message)
        this.$router.push('/core/integral-grade/list')
      })
    },
    fetchById(id) {
      integralGradeApi.getById(id).then((resp) => {
        this.integralGrade = resp.data.record
      })
    },
  },
  created() {
    //当路由中存在id时,为更新
    if (this.$route.params.id) {
      this.fetchById(this.$route.params.id)
    }
  },
  mounted() {},
}
</script>
<style scoped></style>
