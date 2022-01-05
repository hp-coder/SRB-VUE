<template>
  <div class="app-container">
    <div style="margin-bottom: 10px">
      <el-button
        @click="dialogVisible = true"
        type="primary"
        size="mini"
        icon="el-icon-upload2"
      >
        导入Excel
      </el-button>
      <el-button
        @click="exportData"
        type="primary"
        size="mini"
        icon="el-icon-download"
      >
        导出Excel
      </el-button>
    </div>
    <el-dialog title="数据字典导入" :visible.sync="dialogVisible" width="30%">
      <el-form>
        <el-form-item lable="请选择Excel文件">
          <el-upload
            drag
            :auto-upload="true"
            :multiple="false"
            :limit="1"
            :on-exceed="fileUploadExceed"
            :on-success="fileUploadSuccess"
            :on-error="fileUploadError"
            :action="BASE_API + '/admin/core/dict/import'"
            name="file"
            accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传xls,xlsx文件</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      BASE_API: process.env.VUE_APP_BASE_API,
    }
  },
  methods: {
    exportData() {
        //需要显示的调用下载地址
        console.log("被调用了")
        window.location.href= this.BASE_API +'/admin/core/dict/exportData'
    },
    fileUploadSuccess(resp) {
      if (resp.code === 0) {
        this.$message.success('数据导入成功')
        this.dialogVisible = false
      } else {
        this.$message.error(resp.message)
      }
    },
    fileUploadError() {
      this.$message.error('数据导入失败')
    },
    fileUploadExceed() {
      this.$message.warning('一次只能上传一个文件')
    },
  },
}
</script>
