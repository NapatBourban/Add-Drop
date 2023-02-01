<script setup>
import { UseSubject } from "../stores/subject";
import { UseAD } from "../stores/AddDrop";
const { AD, add, dele } = UseAD();
const { subject } = UseSubject();
</script>
<template>
  <div class="container" style="margin-top: 10%; text-align: center">
    <div style="text-align: center; margin-bottom: 2%"><h2>รายวิชาที่เปิดสอน</h2></div>
    <div class="row">
      <div class="col">รหัส</div>
      <div class="col">ชื่อ</div>
      <div class="col">กลุ่ม</div>
      <div class="col"></div>
    </div>
    <div class="row mt-3" v-for="n in subject.length">
      <div class="col" v-if="subject && subject[n - 1]">{{ subject[n - 1].Code }}</div>
      <div class="col" v-if="subject && subject[n - 1]">{{ subject[n - 1].Name }}</div>
      <div class="col" v-if="subject && subject[n - 1]">{{ subject[n - 1].group }}</div>
      <div class="col">
        <button
          class="btn btn-success"
          @click="add(subject[n - 1].Code, subject[n - 1].Name, subject[n - 1].group)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope-plus-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"
            />
            <path
              d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="d-md-flex justify-content-md-center mt-3">
    <button
      class="btn btn-dark"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-folder-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"
        /></svg
      >เช็ควิชาที่เลือก
    </button>
  </div>
  <div
    class="offcanvas offcanvas-end"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
    style="width: 60%"
  >
    <div class="offcanvas-header">
      <div class="container" style="margin-top: 5%; text-align: center">
        <h3 style="text-align: center; margin-bottom: 2%">รายวิชาที่ถูกเลือก</h3>
        <div class="row">
          <div class="col"></div>
          <div class="col">รหัส</div>
          <div class="col">ชื่อ</div>
          <div class="col">กลุ่ม</div>
          <div class="col"></div>
        </div>
        <div class="row mt-3" v-for="n in AD.length">
          <div class="col">{{ n }}</div>
          <div class="col" v-if="AD && AD[n - 1]">{{ AD[n - 1].code }}</div>
          <div class="col" v-if="AD && AD[n - 1]">{{ AD[n - 1].name }}</div>
          <div class="col" v-if="AD && AD[n - 1]">{{ AD[n - 1].group }}</div>
          <div class="col">
            <button class="btn btn-success" @click="dele(n - 1)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
<div class="position-absolute top-0 end-0 mt-3 mx-4">
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        
      ></button></div>
    </div>
    <div class="offcanvas-body">
      <div class="d-md-flex justify-content-md-center mt-3">
        <button
          type="button"
          class="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          ยืนยันการลงทะเบียน
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">ตรวจสอบ</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">ตรวจสอบรายวิชาถูกต้องเรียบร้อยแล้วกดตกลงได้เลย</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  ยกเลิก
                </button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">ตรวจสอบ</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">ตรวจสอบรายวิชาถูกต้องเรียบร้อยแล้วกดตกลงได้เลย</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            ยกเลิก
          </button>
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
            ตกลง
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
