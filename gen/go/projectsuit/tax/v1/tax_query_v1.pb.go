// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: projectsuit/tax/v1/tax_query_v1.proto

package taxv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetTaxRateRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GetTaxRateRequest) Reset() {
	*x = GetTaxRateRequest{}
	mi := &file_projectsuit_tax_v1_tax_query_v1_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetTaxRateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTaxRateRequest) ProtoMessage() {}

func (x *GetTaxRateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_projectsuit_tax_v1_tax_query_v1_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTaxRateRequest.ProtoReflect.Descriptor instead.
func (*GetTaxRateRequest) Descriptor() ([]byte, []int) {
	return file_projectsuit_tax_v1_tax_query_v1_proto_rawDescGZIP(), []int{0}
}

func (x *GetTaxRateRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type GetTaxRateResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Tax           *TaxRate               `protobuf:"bytes,1,opt,name=tax,proto3" json:"tax,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GetTaxRateResponse) Reset() {
	*x = GetTaxRateResponse{}
	mi := &file_projectsuit_tax_v1_tax_query_v1_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetTaxRateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTaxRateResponse) ProtoMessage() {}

func (x *GetTaxRateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_projectsuit_tax_v1_tax_query_v1_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTaxRateResponse.ProtoReflect.Descriptor instead.
func (*GetTaxRateResponse) Descriptor() ([]byte, []int) {
	return file_projectsuit_tax_v1_tax_query_v1_proto_rawDescGZIP(), []int{1}
}

func (x *GetTaxRateResponse) GetTax() *TaxRate {
	if x != nil {
		return x.Tax
	}
	return nil
}

var File_projectsuit_tax_v1_tax_query_v1_proto protoreflect.FileDescriptor

const file_projectsuit_tax_v1_tax_query_v1_proto_rawDesc = "" +
	"\n" +
	"%projectsuit/tax/v1/tax_query_v1.proto\x12\x12projectsuit.tax.v1\x1a&projectsuit/tax/v1/tax_common_v1.proto\"#\n" +
	"\x11GetTaxRateRequest\x12\x0e\n" +
	"\x02id\x18\x01 \x01(\tR\x02id\"C\n" +
	"\x12GetTaxRateResponse\x12-\n" +
	"\x03tax\x18\x01 \x01(\v2\x1b.projectsuit.tax.v1.TaxRateR\x03tax2n\n" +
	"\x0fTaxQueryService\x12[\n" +
	"\n" +
	"GetTaxRate\x12%.projectsuit.tax.v1.GetTaxRateRequest\x1a&.projectsuit.tax.v1.GetTaxRateResponseB\xd6\x01\n" +
	"\x16com.projectsuit.tax.v1B\x0fTaxQueryV1ProtoP\x01ZAgithub.com/orjinfinity/suit-proto/gen/go/projectsuit/tax/v1;taxv1\xa2\x02\x03PTX\xaa\x02\x12Projectsuit.Tax.V1\xca\x02\x12Projectsuit\\Tax\\V1\xe2\x02\x1eProjectsuit\\Tax\\V1\\GPBMetadata\xea\x02\x14Projectsuit::Tax::V1b\x06proto3"

var (
	file_projectsuit_tax_v1_tax_query_v1_proto_rawDescOnce sync.Once
	file_projectsuit_tax_v1_tax_query_v1_proto_rawDescData []byte
)

func file_projectsuit_tax_v1_tax_query_v1_proto_rawDescGZIP() []byte {
	file_projectsuit_tax_v1_tax_query_v1_proto_rawDescOnce.Do(func() {
		file_projectsuit_tax_v1_tax_query_v1_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_projectsuit_tax_v1_tax_query_v1_proto_rawDesc), len(file_projectsuit_tax_v1_tax_query_v1_proto_rawDesc)))
	})
	return file_projectsuit_tax_v1_tax_query_v1_proto_rawDescData
}

var file_projectsuit_tax_v1_tax_query_v1_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_projectsuit_tax_v1_tax_query_v1_proto_goTypes = []any{
	(*GetTaxRateRequest)(nil),  // 0: projectsuit.tax.v1.GetTaxRateRequest
	(*GetTaxRateResponse)(nil), // 1: projectsuit.tax.v1.GetTaxRateResponse
	(*TaxRate)(nil),            // 2: projectsuit.tax.v1.TaxRate
}
var file_projectsuit_tax_v1_tax_query_v1_proto_depIdxs = []int32{
	2, // 0: projectsuit.tax.v1.GetTaxRateResponse.tax:type_name -> projectsuit.tax.v1.TaxRate
	0, // 1: projectsuit.tax.v1.TaxQueryService.GetTaxRate:input_type -> projectsuit.tax.v1.GetTaxRateRequest
	1, // 2: projectsuit.tax.v1.TaxQueryService.GetTaxRate:output_type -> projectsuit.tax.v1.GetTaxRateResponse
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_projectsuit_tax_v1_tax_query_v1_proto_init() }
func file_projectsuit_tax_v1_tax_query_v1_proto_init() {
	if File_projectsuit_tax_v1_tax_query_v1_proto != nil {
		return
	}
	file_projectsuit_tax_v1_tax_common_v1_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_projectsuit_tax_v1_tax_query_v1_proto_rawDesc), len(file_projectsuit_tax_v1_tax_query_v1_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_projectsuit_tax_v1_tax_query_v1_proto_goTypes,
		DependencyIndexes: file_projectsuit_tax_v1_tax_query_v1_proto_depIdxs,
		MessageInfos:      file_projectsuit_tax_v1_tax_query_v1_proto_msgTypes,
	}.Build()
	File_projectsuit_tax_v1_tax_query_v1_proto = out.File
	file_projectsuit_tax_v1_tax_query_v1_proto_goTypes = nil
	file_projectsuit_tax_v1_tax_query_v1_proto_depIdxs = nil
}
