import React from "react";
import { Section } from "@/components/common/Section/Section";
import { H2 } from "@/components/common/Heading/H2";
import { Paragraph } from "@/components/common/Paragraph/Paragraph";

export const AboutUS = () => {
  return (
    <Section id="About-Us">
      <div className="flex flex-col space-y-16  w-[90%] pt-8">
        {/* <div className='flex  justify-center'>
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_657_106)">
                            <path d="M70.9722 15.6412H61.5374V9.60269H70.9722V15.6412Z" fill="#CBC4CC" />
                            <path d="M55.5914 9.60291H61.9281V15.6414H55.5914V9.60291Z" fill="#B5ADB6" />
                            <path d="M35.1813 9.60291H44.5075V15.6414H35.1813V9.60291Z" fill="#CBC4CC" />
                            <path d="M28.8825 9.60291H35.3766V15.6414H28.8825V9.60291Z" fill="#B5ADB6" />
                            <path d="M74.0835 8.82204C73.695 8.82204 73.3224 8.66771 73.0477 8.393C72.773 8.11829 72.6187 7.7457 72.6187 7.3572V1.46484C72.6187 0.655662 73.2745 0 74.0835 0C74.8925 0 75.5483 0.655662 75.5483 1.46484V7.3572C75.5483 7.7457 75.394 8.11829 75.1193 8.393C74.8446 8.66771 74.472 8.82204 74.0835 8.82204ZM25.9165 8.82204C25.528 8.82204 25.1554 8.66771 24.8807 8.393C24.606 8.11829 24.4517 7.7457 24.4517 7.3572V1.46484C24.4517 0.655662 25.1075 0 25.9165 0C26.7255 0 27.3813 0.655662 27.3813 1.46484V7.3572C27.3813 7.7457 27.227 8.11829 26.9523 8.393C26.6776 8.66771 26.305 8.82204 25.9165 8.82204Z" fill="#FFE177" />
                            <path d="M76.2066 5.41989H75.4558C75.0673 5.41989 74.6947 5.57422 74.42 5.84893C74.1453 6.12365 73.9909 6.49623 73.9909 6.88473V15.8365H77.6714V6.88473C77.6714 6.49623 77.5171 6.12365 77.2424 5.84893C76.9677 5.57422 76.5951 5.41989 76.2066 5.41989Z" fill="#CBC4CC" />
                            <path d="M75.6511 5.41989H71.9605C71.572 5.41989 71.1994 5.57422 70.9247 5.84893C70.65 6.12365 70.4956 6.49623 70.4956 6.88473V15.8365H74.1863V6.88473C74.1863 6.49623 74.3406 6.12365 74.6153 5.84893C74.89 5.57422 75.2626 5.41989 75.6511 5.41989Z" fill="#B5ADB6" />
                            <path d="M28.0396 5.41989H27.2888C26.9003 5.41989 26.5277 5.57422 26.253 5.84893C25.9783 6.12365 25.8239 6.49623 25.8239 6.88473V15.8365H29.5044V6.88473C29.5044 6.49623 29.3501 6.12365 29.0754 5.84893C28.8006 5.57422 28.4281 5.41989 28.0396 5.41989Z" fill="#CBC4CC" />
                            <path d="M27.4841 5.41989H23.7935C23.405 5.41989 23.0324 5.57422 22.7577 5.84893C22.4829 6.12365 22.3286 6.49623 22.3286 6.88473V15.8365H26.0192V6.88473C26.0192 6.49623 26.1736 6.12365 26.4483 5.84893C26.723 5.57422 27.0956 5.41989 27.4841 5.41989Z" fill="#B5ADB6" />
                            <path d="M77.6714 21.8103H61.5374V15.4458H77.6714V21.8103Z" fill="#FFE177" />
                            <path d="M55.5914 15.4458H61.9281V21.8103H55.5914V15.4458Z" fill="#FFC344" />
                            <path d="M29.3091 15.4458H44.5075V21.8103H29.3091V15.4458Z" fill="#FFE177" />
                            <path d="M22.3286 15.4458H29.5044V21.8103H22.3286V15.4458ZM77.6714 28.2229H61.5375V21.4355H77.6714V28.2229Z" fill="#FFC344" />
                            <path d="M55.5914 21.4355H61.9281V28.223H55.5914V21.4355Z" fill="#F7B730" />
                            <path d="M29.3091 21.4355H44.5075V28.223H29.3091V21.4355Z" fill="#FFC344" />
                            <path d="M22.3286 21.4355H29.5044V28.223H22.3286V21.4355Z" fill="#F7B730" />
                            <path d="M78.8513 27.6204H61.5374V34.196H79.5167V28.286C79.5168 28.1986 79.4996 28.1121 79.4661 28.0313C79.4327 27.9506 79.3837 27.8772 79.3219 27.8154C79.2601 27.7536 79.1868 27.7045 79.106 27.6711C79.0253 27.6376 78.9387 27.6204 78.8513 27.6204Z" fill="#FFE177" />
                            <path d="M55.5479 27.6204H61.9281V34.196H55.5479V27.6204Z" fill="#FFC344" />
                            <path d="M28.8364 27.6204L28.5503 28.223V33.2687H26.9946L26.4382 34.1958H44.4522V27.6204H28.8364Z" fill="#FFE177" />
                            <path d="M29.4528 27.6204H21.1487C21.0613 27.6204 20.9748 27.6376 20.894 27.6711C20.8133 27.7045 20.7399 27.7536 20.6781 27.8154C20.6163 27.8772 20.5673 27.9506 20.5339 28.0313C20.5005 28.1121 20.4833 28.1986 20.4833 28.286V34.196H28.7874V28.286C28.7874 28.1986 28.8045 28.1121 28.838 28.0313C28.8714 27.9506 28.9204 27.8772 28.9822 27.8154C29.044 27.7536 29.1174 27.7045 29.1981 27.6711C29.2789 27.6376 29.3654 27.6204 29.4528 27.6204ZM81.362 34.4708C81.362 34.3834 81.3448 34.2968 81.3113 34.2161C81.2779 34.1353 81.2288 34.062 81.167 34.0002C81.1052 33.9384 81.0318 33.8894 80.9511 33.8559C80.8703 33.8225 80.7838 33.8053 80.6964 33.8054H61.5373V40.5762H81.3618V34.4708H81.362Z" fill="#FFC344" />
                            <path d="M26.6726 33.8051L26.311 34.4079V39.6487L24.5532 40.43V40.576H38.4626V33.8051H26.6726Z" fill="#FFC344" />
                            <path d="M27.6075 33.8052H19.3034C19.127 33.8052 18.9577 33.8753 18.8329 34.0001C18.7081 34.1249 18.638 34.2941 18.638 34.4706V40.5759H26.9421V34.4706C26.9421 34.2941 27.0122 34.1249 27.137 34.0001C27.2618 33.8753 27.4311 33.8052 27.6075 33.8052Z" fill="#F7B730" />
                            <path d="M83.2073 40.8508C83.2073 40.6743 83.1372 40.5051 83.0124 40.3803C82.8876 40.2555 82.7184 40.1854 82.5419 40.1854H61.5375V46.9562H83.2075L83.2073 40.8508ZM25.1036 40.1854L24.5532 40.4299V45.9639L22.6325 46.9562H38.4626V40.1854H25.1036Z" fill="#FFE177" />
                            <path d="M25.7622 40.1854H17.4581C17.2817 40.1854 17.1124 40.2555 16.9876 40.3803C16.8628 40.5051 16.7927 40.6743 16.7927 40.8508V46.956H25.0968V40.8508C25.0968 40.6743 25.1669 40.5051 25.2917 40.3803C25.4165 40.2555 25.5857 40.1854 25.7622 40.1854ZM85.0528 47.231C85.0528 47.0545 84.9827 46.8853 84.8579 46.7604C84.7331 46.6356 84.5638 46.5655 84.3873 46.5654H61.5374V53.3363H85.0528V47.231Z" fill="#FFC344" />
                            <path d="M23.3886 46.5656L22.6325 46.9562V52.0836L20.9073 53.2881V53.3363H38.4626V46.5656H23.3886Z" fill="#FFC344" />
                            <path d="M23.9169 46.5656H15.6128C15.5254 46.5656 15.4389 46.5828 15.3581 46.6163C15.2774 46.6497 15.204 46.6988 15.1422 46.7606C15.0804 46.8224 15.0314 46.8958 14.998 46.9765C14.9646 47.0573 14.9474 47.1438 14.9474 47.2312V53.3365H23.2515V47.2312C23.2514 47.1438 23.2686 47.0573 23.302 46.9765C23.3355 46.8957 23.3845 46.8223 23.4463 46.7605C23.5081 46.6987 23.5814 46.6497 23.6622 46.6162C23.743 46.5828 23.8295 46.5656 23.9169 46.5656Z" fill="#F7B730" />
                            <path d="M86.8981 53.6113C86.8981 53.4348 86.828 53.2656 86.7032 53.1408C86.5784 53.016 86.4092 52.9459 86.2327 52.9459H63.0023V59.7167H86.8981V53.6113ZM21.3976 52.9457L20.9073 53.2881V58.6916L19.0193 59.6681V59.7165H36.9977V52.9457H21.3976Z" fill="#FFE177" />
                            <path d="M22.0714 52.9457H13.7675C13.591 52.9457 13.4218 53.0158 13.2969 53.1406C13.1721 53.2654 13.102 53.4346 13.1019 53.6111V59.7163H21.406V53.6111C21.406 53.4346 21.4762 53.2654 21.6009 53.1406C21.7257 53.0159 21.8949 52.9457 22.0714 52.9457ZM88.7434 59.9914C88.7434 59.904 88.7262 59.8174 88.6928 59.7367C88.6593 59.6559 88.6103 59.5825 88.5485 59.5208C88.4867 59.459 88.4133 59.41 88.3325 59.3765C88.2518 59.3431 88.1652 59.3259 88.0778 59.3259H63.0023V66.0968H88.7434V59.9914Z" fill="#FFC344" />
                            <path d="M19.681 59.3259L19.0193 59.6681V65.1695L17.229 65.9181V66.0968H36.9978V59.3259H19.681Z" fill="#FFC344" />
                            <path d="M20.2261 59.3259H11.9222C11.7457 59.3259 11.5765 59.396 11.4517 59.5208C11.3269 59.6456 11.2568 59.8149 11.2568 59.9914V66.0966H19.5609V59.9914C19.5609 59.904 19.5781 59.8175 19.6115 59.7367C19.6449 59.656 19.6939 59.5826 19.7557 59.5208C19.8174 59.459 19.8908 59.41 19.9715 59.3766C20.0522 59.3431 20.1388 59.3259 20.2261 59.3259Z" fill="#F7B730" />
                            <path d="M90.5887 66.3717C90.5887 66.1952 90.5186 66.0259 90.3938 65.9011C90.269 65.7763 90.0998 65.7061 89.9233 65.7061H63.0023V72.4769H90.5887V66.3717ZM17.7361 65.7063L17.229 65.9182V71.0777L15.0734 72.4769H36.9977V65.7063H17.7361Z" fill="#FFE177" />
                            <path d="M18.3808 65.7062H10.0767C9.98932 65.7062 9.90277 65.7235 9.82203 65.7569C9.74128 65.7904 9.66792 65.8394 9.60612 65.9012C9.54433 65.963 9.49532 66.0364 9.46189 66.1172C9.42846 66.1979 9.41127 66.2845 9.41129 66.3719V72.4771H17.7154V66.3719C17.7153 66.2845 17.7325 66.1979 17.766 66.1172C17.7994 66.0364 17.8484 65.963 17.9102 65.9012C17.972 65.8394 18.0453 65.7904 18.1261 65.7569C18.2068 65.7235 18.2934 65.7062 18.3808 65.7062ZM92.434 72.7519C92.434 72.5754 92.3639 72.4062 92.2391 72.2814C92.1143 72.1566 91.945 72.0865 91.7686 72.0865H66.6843V78.8574H92.434V72.7519Z" fill="#FFC344" />
                            <path d="M15.6751 72.0862L14.9472 72.5587V77.7671L13.1019 78.8571H33.3158V72.0862H15.6751Z" fill="#FFC344" />
                            <path d="M16.5355 72.0862H8.23142C8.05493 72.0862 7.88568 72.1564 7.76089 72.2811C7.63609 72.4059 7.56599 72.5752 7.56599 72.7517V78.8569H15.8701V72.7517C15.8701 72.5752 15.9402 72.4059 16.065 72.2811C16.1898 72.1564 16.359 72.0862 16.5355 72.0862Z" fill="#F7B730" />
                            <path d="M93.6139 78.4664H66.6843V84.8467H94.2793V79.1321C94.2793 79.0446 94.2621 78.9581 94.2287 78.8773C94.1953 78.7966 94.1462 78.7232 94.0845 78.6614C94.0227 78.5996 93.9493 78.5506 93.8686 78.5171C93.7878 78.4836 93.7013 78.4664 93.6139 78.4664ZM13.7632 78.4664L13.1019 78.8571V84.0658L11.2566 85.2373H33.3157V78.4664H13.7632Z" fill="#FFE177" />
                            <path d="M14.6902 78.4664H6.38611C6.20963 78.4664 6.04037 78.5365 5.91558 78.6613C5.79079 78.7861 5.72068 78.9554 5.72068 79.1319V85.2371H14.0248V79.1319C14.0248 78.9554 14.0949 78.7861 14.2197 78.6613C14.3444 78.5365 14.5137 78.4664 14.6902 78.4664ZM95.4592 84.8467H66.6843V98.5351H96.1249V85.5121C96.1249 85.4247 96.1076 85.3382 96.0742 85.2574C96.0407 85.1767 95.9917 85.1033 95.9299 85.0415C95.8681 84.9797 95.7947 84.9307 95.7139 84.8973C95.6332 84.8638 95.5466 84.8467 95.4592 84.8467Z" fill="#FFC344" />
                            <path d="M11.872 84.8467L11.2566 85.2374V98.5352H33.3158V84.8467H11.872Z" fill="#FFC344" />
                            <path d="M12.8449 84.8467H4.54081C4.36427 84.8467 4.19497 84.9169 4.07014 85.0417C3.94531 85.1665 3.87518 85.3358 3.87518 85.5124V98.5354H12.1793V85.5124C12.1793 85.3358 12.2494 85.1665 12.3742 85.0417C12.4991 84.9169 12.6684 84.8467 12.8449 84.8467Z" fill="#F7B730" />
                            <path d="M50 6.69766C49.6115 6.69766 49.2389 6.54333 48.9642 6.26862C48.6895 5.99391 48.5352 5.62132 48.5352 5.23281V1.46484C48.5352 0.655664 49.191 0 50 0C50.809 0 51.4649 0.655664 51.4649 1.46484V5.23281C51.4649 5.62132 51.3105 5.99391 51.0358 6.26862C50.7611 6.54333 50.3885 6.69766 50 6.69766Z" fill="#FFE177" />
                            <path d="M38.3946 77.1161H61.6055V98.5352H38.3946V77.1161Z" fill="#F7B730" />
                            <path d="M38.3946 77.1161H46.0702V98.5352H38.3946V77.1161ZM54.4596 83.5446H50.8612C50.581 83.5447 50.3123 83.656 50.1142 83.8541C49.9161 84.0522 49.8048 84.3209 49.8047 84.601V98.5352H55.5161V84.601C55.516 84.3209 55.4047 84.0522 55.2066 83.8541C55.0085 83.656 54.7398 83.5447 54.4596 83.5446Z" fill="#FFC344" />
                            <path d="M51.0565 83.5446H45.5405C45.2603 83.5446 44.9916 83.6559 44.7935 83.854C44.5954 84.0522 44.4841 84.3208 44.484 84.601V98.5352H50.0001V84.601C50.0001 84.3208 50.1114 84.0522 50.3095 83.854C50.5076 83.6559 50.7763 83.5446 51.0565 83.5446Z" fill="#55504E" />
                            <path d="M38.9145 98.5352H32.9249V77.1161H38.9145V98.5352ZM67.0753 98.5352H61.0856V77.1161H67.0753V98.5352Z" fill="#FFE177" />
                            <path d="M41.6104 58.1708H58.1469V72.5589H41.6104V58.1708Z" fill="#F7B730" />
                            <path d="M41.6104 58.1708H49.8785V72.5589H41.6104V58.1708Z" fill="#FFC344" />
                            <path d="M42.5967 72.5587H36.6071V58.1707H42.5967V72.5587ZM63.393 72.5587H57.4034V58.1707H63.393V72.5587Z" fill="#FFE177" />
                            <path d="M43.2867 39.4372H56.5192V53.6461H43.2867V39.4372Z" fill="#F7B730" />
                            <path d="M43.2867 39.4372H50V53.6461H43.2867V39.4372Z" fill="#FFC344" />
                            <path d="M44.0616 53.6461H38.0719V39.4372H44.0616V53.6461ZM61.9282 53.6461H55.9385V39.4372H61.9282V53.6461Z" fill="#FFE177" />
                            <path d="M49.4879 21.0779H55.9385V34.4079H49.4879V21.0779Z" fill="#F7B730" />
                            <path d="M44.0615 21.0779H50V34.4079H44.0615V21.0779Z" fill="#FFC344" />
                            <path d="M50 56.5108C49.6115 56.5108 49.2389 56.3565 48.9642 56.0818C48.6895 55.8071 48.5352 55.4345 48.5352 55.046V46.3704C48.5352 45.5612 49.191 44.9056 50 44.9056C50.809 44.9056 51.4649 45.5612 51.4649 46.3704V55.046C51.4649 55.4345 51.3105 55.8071 51.0358 56.0818C50.7611 56.3565 50.3885 56.5108 50 56.5108ZM50 36.9144C49.6115 36.9144 49.2389 36.76 48.9642 36.4853C48.6895 36.2106 48.5352 35.838 48.5352 35.4495V27.7017C48.5352 26.8925 49.191 26.2368 50 26.2368C50.809 26.2368 51.4649 26.8925 51.4649 27.7017V35.4495C51.4649 35.838 51.3105 36.2106 51.0358 36.4853C50.7611 36.76 50.3885 36.9144 50 36.9144ZM50 75.0655C49.6115 75.0655 49.2389 74.9112 48.9642 74.6365C48.6895 74.3618 48.5352 73.9892 48.5352 73.6007V65.3319C48.5352 64.5227 49.191 63.8671 50 63.8671C50.809 63.8671 51.4649 64.5227 51.4649 65.3319V73.6007C51.4649 73.9892 51.3105 74.3618 51.0358 74.6365C50.7611 74.9112 50.3885 75.0655 50 75.0655Z" fill="#55504E" />
                            <path d="M54.6621 7.13298L52.9694 5.90817H52.1899L49.4881 8.36638V15.6414H55.9387V9.6322C55.9387 9.14436 55.8229 8.66348 55.601 8.22904C55.3791 7.79459 55.0574 7.41896 54.6621 7.13298Z" fill="#FFE177" />
                            <path d="M51.2764 7.13298L52.9692 5.90817L51.3838 4.76111C50.9812 4.46981 50.4969 4.31299 49.9999 4.31299C49.503 4.31299 49.0187 4.46981 48.616 4.76111L45.3377 7.13317C44.9425 7.41914 44.6208 7.79478 44.3989 8.22923C44.177 8.66368 44.0613 9.14456 44.0614 9.63239V15.6414H49.9998V9.6322C49.9999 9.14437 50.1157 8.66352 50.3376 8.22908C50.5595 7.79465 50.8812 7.41901 51.2764 7.13298Z" fill="#FFC344" />
                            <path d="M50 18.6853C49.6115 18.6853 49.2389 18.531 48.9642 18.2563C48.6895 17.9816 48.5352 17.609 48.5352 17.2205V11.5396C48.5352 10.7304 49.191 10.0748 50 10.0748C50.809 10.0748 51.4649 10.7304 51.4649 11.5396V17.2205C51.4649 17.609 51.3105 17.9816 51.0358 18.2563C50.7611 18.531 50.3885 18.6853 50 18.6853Z" fill="#55504E" />
                            <path d="M45.8746 52.9457H63.393V58.9353H45.8746V52.9457Z" fill="#CBC4CC" />
                            <path d="M36.6071 52.9457H46.07V58.9353H36.6071V52.9457Z" fill="#B5ADB6" />
                            <path d="M46.8354 33.8052H61.9282V39.7948H46.8354V33.8052Z" fill="#CBC4CC" />
                            <path d="M38.0719 33.8052H47.0307V39.7948H38.0719V33.8052Z" fill="#B5ADB6" />
                            <path d="M49.4879 15.4458H55.9385V21.4355H49.4879V15.4458Z" fill="#CBC4CC" />
                            <path d="M44.0615 15.4458H50V21.4355H44.0615V15.4458ZM98.5352 100H1.46484C0.655857 100 0 99.3444 0 98.5352C0 97.726 0.655857 97.0704 1.46484 97.0704H98.5352C99.3441 97.0704 100 97.726 100 98.5352C100 99.3444 99.3441 100 98.5352 100Z" fill="#B5ADB6" />
                            <path d="M42.037 72.0862H67.0751V78.0759H42.037V72.0862Z" fill="#CBC4CC" />
                            <path d="M32.9251 72.0862H42.2323V78.0759H32.9251V72.0862Z" fill="#B5ADB6" />
                        </g>
                        <defs>
                            <clipPath id="clip0_657_106">
                                <rect width="100" height="100" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div> */}
        <div className="w-[90%]  flex justify-center flex-col space-y-5 items-center  mx-auto">
          <H2
            text="About Us"
            className="lg:text-5xl 2xl:text-5xl lg:font-bold"
          />

          <Paragraph
            text="Avalamba Foundation is a charitable trust formed in the year 2022 by a team of young Bharatiyas based out of Chennai, India. The word “Avalamba” which literally translates into Support and sustenance - is the fundamental aim of the organisation. The foundation aims to play a vital role in preserving the rich legacy of baratiya culture, civilizational consciousness and its people, by extending maximum support."
            className="font-medium lg:text-3xl xsm:text-lg  text-center pt-5 "
          />
        </div>
      </div>
    </Section>
  );
};
