// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: projectsuit/menu/v1/menu_command_v1.proto

package menuv1

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

type CreateMenuRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Menu          *MenuInput             `protobuf:"bytes,1,opt,name=menu,proto3" json:"menu,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *CreateMenuRequest) Reset() {
	*x = CreateMenuRequest{}
	mi := &file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *CreateMenuRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateMenuRequest) ProtoMessage() {}

func (x *CreateMenuRequest) ProtoReflect() protoreflect.Message {
	mi := &file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateMenuRequest.ProtoReflect.Descriptor instead.
func (*CreateMenuRequest) Descriptor() ([]byte, []int) {
	return file_projectsuit_menu_v1_menu_command_v1_proto_rawDescGZIP(), []int{0}
}

func (x *CreateMenuRequest) GetMenu() *MenuInput {
	if x != nil {
		return x.Menu
	}
	return nil
}

type CreateMenuResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *CreateMenuResponse) Reset() {
	*x = CreateMenuResponse{}
	mi := &file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *CreateMenuResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateMenuResponse) ProtoMessage() {}

func (x *CreateMenuResponse) ProtoReflect() protoreflect.Message {
	mi := &file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateMenuResponse.ProtoReflect.Descriptor instead.
func (*CreateMenuResponse) Descriptor() ([]byte, []int) {
	return file_projectsuit_menu_v1_menu_command_v1_proto_rawDescGZIP(), []int{1}
}

func (x *CreateMenuResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type UpdateMenuRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Menu          *MenuInput             `protobuf:"bytes,2,opt,name=menu,proto3" json:"menu,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *UpdateMenuRequest) Reset() {
	*x = UpdateMenuRequest{}
	mi := &file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UpdateMenuRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateMenuRequest) ProtoMessage() {}

func (x *UpdateMenuRequest) ProtoReflect() protoreflect.Message {
	mi := &file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateMenuRequest.ProtoReflect.Descriptor instead.
func (*UpdateMenuRequest) Descriptor() ([]byte, []int) {
	return file_projectsuit_menu_v1_menu_command_v1_proto_rawDescGZIP(), []int{2}
}

func (x *UpdateMenuRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UpdateMenuRequest) GetMenu() *MenuInput {
	if x != nil {
		return x.Menu
	}
	return nil
}

type UpdateMenuResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Success       bool                   `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *UpdateMenuResponse) Reset() {
	*x = UpdateMenuResponse{}
	mi := &file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UpdateMenuResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateMenuResponse) ProtoMessage() {}

func (x *UpdateMenuResponse) ProtoReflect() protoreflect.Message {
	mi := &file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateMenuResponse.ProtoReflect.Descriptor instead.
func (*UpdateMenuResponse) Descriptor() ([]byte, []int) {
	return file_projectsuit_menu_v1_menu_command_v1_proto_rawDescGZIP(), []int{3}
}

func (x *UpdateMenuResponse) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

type DeleteMenuRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DeleteMenuRequest) Reset() {
	*x = DeleteMenuRequest{}
	mi := &file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DeleteMenuRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteMenuRequest) ProtoMessage() {}

func (x *DeleteMenuRequest) ProtoReflect() protoreflect.Message {
	mi := &file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteMenuRequest.ProtoReflect.Descriptor instead.
func (*DeleteMenuRequest) Descriptor() ([]byte, []int) {
	return file_projectsuit_menu_v1_menu_command_v1_proto_rawDescGZIP(), []int{4}
}

func (x *DeleteMenuRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type DeleteMenuResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Success       bool                   `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DeleteMenuResponse) Reset() {
	*x = DeleteMenuResponse{}
	mi := &file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DeleteMenuResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteMenuResponse) ProtoMessage() {}

func (x *DeleteMenuResponse) ProtoReflect() protoreflect.Message {
	mi := &file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteMenuResponse.ProtoReflect.Descriptor instead.
func (*DeleteMenuResponse) Descriptor() ([]byte, []int) {
	return file_projectsuit_menu_v1_menu_command_v1_proto_rawDescGZIP(), []int{5}
}

func (x *DeleteMenuResponse) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

var File_projectsuit_menu_v1_menu_command_v1_proto protoreflect.FileDescriptor

const file_projectsuit_menu_v1_menu_command_v1_proto_rawDesc = "" +
	"\n" +
	")projectsuit/menu/v1/menu_command_v1.proto\x12\x13projectsuit.menu.v1\x1a(projectsuit/menu/v1/menu_common_v1.proto\"G\n" +
	"\x11CreateMenuRequest\x122\n" +
	"\x04menu\x18\x01 \x01(\v2\x1e.projectsuit.menu.v1.MenuInputR\x04menu\"$\n" +
	"\x12CreateMenuResponse\x12\x0e\n" +
	"\x02id\x18\x01 \x01(\tR\x02id\"W\n" +
	"\x11UpdateMenuRequest\x12\x0e\n" +
	"\x02id\x18\x01 \x01(\tR\x02id\x122\n" +
	"\x04menu\x18\x02 \x01(\v2\x1e.projectsuit.menu.v1.MenuInputR\x04menu\".\n" +
	"\x12UpdateMenuResponse\x12\x18\n" +
	"\asuccess\x18\x01 \x01(\bR\asuccess\"#\n" +
	"\x11DeleteMenuRequest\x12\x0e\n" +
	"\x02id\x18\x01 \x01(\tR\x02id\".\n" +
	"\x12DeleteMenuResponse\x12\x18\n" +
	"\asuccess\x18\x01 \x01(\bR\asuccess2\xb1\x02\n" +
	"\x12MenuCommandService\x12]\n" +
	"\n" +
	"CreateMenu\x12&.projectsuit.menu.v1.CreateMenuRequest\x1a'.projectsuit.menu.v1.CreateMenuResponse\x12]\n" +
	"\n" +
	"UpdateMenu\x12&.projectsuit.menu.v1.UpdateMenuRequest\x1a'.projectsuit.menu.v1.UpdateMenuResponse\x12]\n" +
	"\n" +
	"DeleteMenu\x12&.projectsuit.menu.v1.DeleteMenuRequest\x1a'.projectsuit.menu.v1.DeleteMenuResponseB\xe0\x01\n" +
	"\x17com.projectsuit.menu.v1B\x12MenuCommandV1ProtoP\x01ZCgithub.com/orjinfinity/suit-proto/gen/go/projectsuit/menu/v1;menuv1\xa2\x02\x03PMX\xaa\x02\x13Projectsuit.Menu.V1\xca\x02\x13Projectsuit\\Menu\\V1\xe2\x02\x1fProjectsuit\\Menu\\V1\\GPBMetadata\xea\x02\x15Projectsuit::Menu::V1b\x06proto3"

var (
	file_projectsuit_menu_v1_menu_command_v1_proto_rawDescOnce sync.Once
	file_projectsuit_menu_v1_menu_command_v1_proto_rawDescData []byte
)

func file_projectsuit_menu_v1_menu_command_v1_proto_rawDescGZIP() []byte {
	file_projectsuit_menu_v1_menu_command_v1_proto_rawDescOnce.Do(func() {
		file_projectsuit_menu_v1_menu_command_v1_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_projectsuit_menu_v1_menu_command_v1_proto_rawDesc), len(file_projectsuit_menu_v1_menu_command_v1_proto_rawDesc)))
	})
	return file_projectsuit_menu_v1_menu_command_v1_proto_rawDescData
}

var file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_projectsuit_menu_v1_menu_command_v1_proto_goTypes = []any{
	(*CreateMenuRequest)(nil),  // 0: projectsuit.menu.v1.CreateMenuRequest
	(*CreateMenuResponse)(nil), // 1: projectsuit.menu.v1.CreateMenuResponse
	(*UpdateMenuRequest)(nil),  // 2: projectsuit.menu.v1.UpdateMenuRequest
	(*UpdateMenuResponse)(nil), // 3: projectsuit.menu.v1.UpdateMenuResponse
	(*DeleteMenuRequest)(nil),  // 4: projectsuit.menu.v1.DeleteMenuRequest
	(*DeleteMenuResponse)(nil), // 5: projectsuit.menu.v1.DeleteMenuResponse
	(*MenuInput)(nil),          // 6: projectsuit.menu.v1.MenuInput
}
var file_projectsuit_menu_v1_menu_command_v1_proto_depIdxs = []int32{
	6, // 0: projectsuit.menu.v1.CreateMenuRequest.menu:type_name -> projectsuit.menu.v1.MenuInput
	6, // 1: projectsuit.menu.v1.UpdateMenuRequest.menu:type_name -> projectsuit.menu.v1.MenuInput
	0, // 2: projectsuit.menu.v1.MenuCommandService.CreateMenu:input_type -> projectsuit.menu.v1.CreateMenuRequest
	2, // 3: projectsuit.menu.v1.MenuCommandService.UpdateMenu:input_type -> projectsuit.menu.v1.UpdateMenuRequest
	4, // 4: projectsuit.menu.v1.MenuCommandService.DeleteMenu:input_type -> projectsuit.menu.v1.DeleteMenuRequest
	1, // 5: projectsuit.menu.v1.MenuCommandService.CreateMenu:output_type -> projectsuit.menu.v1.CreateMenuResponse
	3, // 6: projectsuit.menu.v1.MenuCommandService.UpdateMenu:output_type -> projectsuit.menu.v1.UpdateMenuResponse
	5, // 7: projectsuit.menu.v1.MenuCommandService.DeleteMenu:output_type -> projectsuit.menu.v1.DeleteMenuResponse
	5, // [5:8] is the sub-list for method output_type
	2, // [2:5] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_projectsuit_menu_v1_menu_command_v1_proto_init() }
func file_projectsuit_menu_v1_menu_command_v1_proto_init() {
	if File_projectsuit_menu_v1_menu_command_v1_proto != nil {
		return
	}
	file_projectsuit_menu_v1_menu_common_v1_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_projectsuit_menu_v1_menu_command_v1_proto_rawDesc), len(file_projectsuit_menu_v1_menu_command_v1_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_projectsuit_menu_v1_menu_command_v1_proto_goTypes,
		DependencyIndexes: file_projectsuit_menu_v1_menu_command_v1_proto_depIdxs,
		MessageInfos:      file_projectsuit_menu_v1_menu_command_v1_proto_msgTypes,
	}.Build()
	File_projectsuit_menu_v1_menu_command_v1_proto = out.File
	file_projectsuit_menu_v1_menu_command_v1_proto_goTypes = nil
	file_projectsuit_menu_v1_menu_command_v1_proto_depIdxs = nil
}
